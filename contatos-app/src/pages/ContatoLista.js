import React, { useEffect, useState } from "react"
import { View, Text, Button, FlatList, Pressable } from "react-native"
import { useIsFocused } from "@react-navigation/native"
import api from "../services/Api"
import estilos from "../components/Estilos"
import ContatoItem from "../components/ContatoItem"
import NovoContato from "../components/BotaoNovoContato"

export default function ContatoLista({ navigation }) {

  const [contatos, setConatos] = useState([])
  const isFocused = useIsFocused()

  const carregarContatos = async () => {
    try {
      const response = await api.get('/')
      setConatos(response.data)
    } catch (error) {
      console.error('Erro ao carregar contatos: ', error)
    }
  }

  useEffect(() => {
    if (isFocused) carregarContatos()
  }, [isFocused])

  return (
    <View style={estilos.container}>

      <NovoContato navigation={navigation} />

      <FlatList
        data={contatos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ContatoItem item={item} />
        )}
      >

      </FlatList>
    </View>
  )
}