import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native"
import axios from "axios";
import styles from "../components/Styles";
import { format } from 'date-fns'

export default function HistoricoCotacaoDolar({ route, dolarInfo }) {
  const isFocused = useIsFocused()
  const [dolar, setDolar] = useState([])

    // chamada da api para cotações do dolar
    const carregarHistorico = async () => {
      try {
        const response = await axios.get(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='05-25-2025'&@dataFinalCotacao='05-27-2025'&$top=100&$format=json`)
        setDolar(response.data.value[0])
      } catch (error) {
        console.error(`${error}: Erro ao carregar histórico.`)
      }
    }

    console.log(dolar)
  
    useEffect(() => {
      if (isFocused) carregarHistorico()
    }, [isFocused])

  return (
    <View style={styles.info}>
      <Text style={styles.moedaInfo}>Valor da Compra: {dolar.cotacaoCompra}</Text>
      <Text style={styles.moedaInfo}>Valor da Venda: {dolar.cotacaoVenda}</Text>
      <Text style={styles.moedaInfo}>Hoário da Cotação: {dolar.dataHoraCotacao}</Text>
    </View>
  )
}