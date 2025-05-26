import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { useIsFocused } from "@react-navigation/native"
import { apiListar } from "../services/Api";
import styles from "../components/Styles";
import Moeda from "../components/Moeda";

export default function MoedaList({ navigation, item, route }) {
  const [moedas, setMoedas] = useState([]);
  const isFocused = useIsFocused();

  const carregarMoedas = async () => {

    try {
      const response = await apiListar.get('https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json')
      setMoedas(response.data.value)
    } catch (error) {
      console.error(`${error}: Erro ao carregar as moedas.`)
    }
  }

  useEffect(() => {
    if (isFocused) carregarMoedas()
  }, [isFocused])

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        data={moedas}
        keyExtractor={(item) => item.simbolo}
        renderItem={({ item }) => (
          <Moeda item={item} navigation={navigation} />
        )}
      >
      </FlatList>
    </View>
  )
}