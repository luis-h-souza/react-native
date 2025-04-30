import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import estilos from "../components/Estilos"
import { Button, Text } from "react-native-paper";
import * as Location from "expo-location"

export default function Home({ navigation }) {

  const [localizacao, setLocalizacao] = useState(null)
  const [erro, setErro] = useState(null)

  // useEffect(() => {
    async function detectarLocalizacao() {
      try {
        // Pedir permissão do usuário para rastrear sua localização
        // Desestruturação do objeto
        let { status } = await Location.requestForegroundPermissionsAsync()
        console.log(localizacao)
        if (status != "granted") {
          setErro('Permissão negada para acessar a localiação.')
          return
        }
      } catch (e) {
        setErro('Erro ao detectar a localização.')
      }
      // Obter a localização do usuário
  //     localizacao = await Location.getCurrentPositionAsync({});
  //     setLocalizacao(localizacao);
  //   }
  //   detectarLocalizacao();
  // }, []);

  // let text = 'Waiting...';
  // if (erro) {
  //   text = erro;
  // } else if (localizacao) {
  //   text = JSON.stringify(localizacao);
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>
        Bem Vindo ao App de Contatos
      </Text>
      <Button style={estilos.button} mode="contained" onPress={() => navigation.navigate('Listagem')} icon={"format-list-bulleted-square"} labelStyle={estilos.buttonText}>
        LISTA DE CONTATOS
      </Button>
      <Button style={estilos.button} mode="contained" labelStyle={estilos.buttonText} disabled>
        USO FUTURO
      </Button>
      <Button style={estilos.button} mode="contained" labelStyle={estilos.buttonText} icon={'map-marker'} onPress={detectarLocalizacao}>
        DETECTAR LOCALIZAÇÃO
      </Button>
    </View>
  )
}