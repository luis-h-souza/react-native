// screens/HistoricoScreen.js
import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, ScrollView, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "../components/Styles";

const STORAGE_KEY = "@historico_imc";

const Historico = () => {
  const [historico, setHistorico] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const carregar = async () => {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) {
          setHistorico(JSON.parse(json));
        }
      };
      carregar();
    }, [])
  );


  const limparHistorico = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setHistorico([]);
    } catch (e) {
      console.error("Erro ao limpar histórico:", e);
    }
  };

  return (
    <LinearGradient
      colors={['#66687D', '#4C4C68', '#4C4C68']}
      style={styles.gradiente}
      start={{ x: 0.8, y: 0 }}
      end={{ x: 0.2, y: 1 }}
      locations={[0, 0.5, 1]}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Histórico de IMC</Text>
        {historico.length > 0 ? (
          historico.map((item, index) => (
            <View key={index} style={{ marginVertical: 5 }}>
              <Text style={styles.texto}>IMC: {item.imc}</Text>
              <Text style={styles.texto}>Classificação: {item.classificacao}</Text>
              <Text style={styles.texto}>Data/Hora: {item.dataHora}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.texto}>Nenhum dado no histórico.</Text>
        )}

        {
          // historico.length > 0 && (
          <Pressable
            style={[styles.btn]}
            onPress={limparHistorico}
          >
            <Text style={[{color: "white", fontWeight: "bold", fontSize: 18 }]}>
              Limpar histórico
            </Text>
          </Pressable>
          // )
        }
      </ScrollView>
    </LinearGradient>
  );
};

export default Historico;