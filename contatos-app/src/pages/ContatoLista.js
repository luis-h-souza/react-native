import React, { useEffect, useState } from "react"
import { View, Text, Button, FlatList, TextInput, Pressable } from "react-native"
import { useIsFocused } from "@react-navigation/native"
import { api } from "../services/Api"
import estilos from "../components/Estilos"
import ContatoItem from "../components/ContatoItem"

export default function ContatoLista({ navigation }) {

  const [contatos, setConatos] = useState([])
  const [busca, setBusca] = useState('')
  const isFocused = useIsFocused()

  const contatosFiltrados = contatos.filter(contato => contato.nome.toLowerCase().includes(busca.toLowerCase()))

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

      <TextInput
        style={estilos.inputSearch}
        placeholder="Buscar contato..."
        value={busca}
        onChangeText={setBusca}
      />

      <Pressable style={estilos.button} onPress={() => navigation.navigate('Formulário')} >
        <Text style={estilos.buttonText}>NOVO CONTATO</Text>
      </Pressable>

      <FlatList
        data={contatosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ContatoItem item={item}
            onEdit={() => navigation.navigate('Formulário', { item: item })}
            onDelete={carregarContatos}
          />
        )}
      >
      </FlatList>
    </View>
  )
}