import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native"
import axios from "axios";
import styles from "../components/Styles";
import { format } from 'date-fns'
import { Alert } from "react-native";

export default function ObterCotacao({ navigation, route }) {
  const isFocused = useIsFocused();
  const [simbolo, setSimbolo] = useState('')
  const [nome, setNome] = useState('')
  const [cotacao, setCotacao] = useState(null)

  const hoje = new Date()
  const dataAmericana = format(hoje, 'MM-dd-yyyy')
  const datBrasil = format(hoje, 'dd/MM/yyyy')

  const infoCotacao = route.params?.item

  useEffect(() => {
    if (infoCotacao && isFocused) {
      setSimbolo(infoCotacao.simbolo)
      setNome(infoCotacao.nomeFormatado)
      carregarCotacao()
    }
  }, [infoCotacao, isFocused])
  
  const carregarCotacao = async () => {
    try {
      const response = await axios.get(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${simbolo}'&@dataCotacao='${dataAmericana}'&$top=100&$format=json`)
      setCotacao(response.data.value[4])
    } catch (error) {
      Alert.alert("Erro ao exibir a cotação.", error.message);
    }
  }

  console.log(cotacao)

  // useEffect(() => {
  //   if (isFocused) carregarCotacao()
  // }, [isFocused])

  return (
    <View style={styles.container}>
      <Text>Cotação de {simbolo} em {datBrasil}</Text>
      <Text>Moeda: {nome}</Text>
      
      {/* <Text>{cotacao.cotacaoCompra}</Text> */}
    </View>
  )

}