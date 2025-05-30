import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native"
import axios from "axios";
import styles from "../components/Styles";
import { format } from 'date-fns'
import { Alert } from "react-native";
import HistoricoCotacaoDolar from "../components/HistoricoCotacaoDolar";

export default function ObterCotacao({ navigation, route, dolarInfo }) {
  const isFocused = useIsFocused();
  const [simbolo, setSimbolo] = useState('')
  const [nome, setNome] = useState('')
  const [cotacao, setCotacao] = useState(null)
  const [cotacaoCompra, setCotacaoCompra] = useState('')
  const [dolar, setDolar] = useState([])

  const hoje = new Date()
  const dataAmericana = format(hoje, 'MM-dd-yyyy')
  const datBrasil = format(hoje, 'dd/MM/yyyy')

  const infoCotacao = route.params?.item
  

  useEffect(() => {
    if (infoCotacao && isFocused) {
      setSimbolo(infoCotacao.simbolo)
      setNome(infoCotacao.nomeFormatado)
    }
  }, [infoCotacao, isFocused])

  // chamada da api para carregar as cotações das moedas
  const carregarCotacao = async () => {
    try {
      const response = await axios.get(`
        https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${simbolo}'&@dataCotacao='${dataAmericana}'&$top=100&$format=json`)
      setCotacao(response.data.value[4])
      setCotacaoCompra(response.data.value[4].cotacaoCompra.toFixed(2))
    } catch (error) {
      Alert.alert("Erro ao exibir a cotação.", error.message);
    }
  }

  useEffect(() => {
    if (simbolo && isFocused) {
      carregarCotacao()
    }
  }, [simbolo, isFocused])

  const toReal = (1 / cotacaoCompra).toFixed(2)
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.moedaInfo}>Cotação de {simbolo} em {datBrasil}</Text>
        <Text style={styles.moedaInfo}>Moeda: {nome}</Text>
        <Text style={styles.moedaInfo}> Valor da cotação em reais: R$ {cotacaoCompra}</Text>
        <Text style={styles.moedaInfo}> Valor da cotação em {simbolo}: {toReal}</Text>
      </View>

      {simbolo === 'USD' &&
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={dolar}
          keyExtractor={(item) => item.simbolo}
          renderItem={({ item }) => (
            navigation.navigate('HistoricoCotacaoDolar', { dolarIn: dolarInfo }),
            <HistoricoCotacaoDolar item={item} navigation={navigation}
            />
          )}
        >
        </FlatList>
      }
    </View>
  )
}