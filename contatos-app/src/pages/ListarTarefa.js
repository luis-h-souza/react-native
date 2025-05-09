import React, { useEffect, useState } from "react";
import { View, Text, Pressable, TextInput, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { apiTarefas } from "../services/Api";
import estilos from "../components/Estilos";
import TarefaItem from "../components/TarefaItem";

export default function ListarTarefa({ navigation }) {
  const [tarefas, setTarefas] = useState([]);
  const [busca, setBusca] = useState('');
  const isFocused = useIsFocused();

  // const tarefasFiltrados = tarefas.filter(tarefa => tarefa.nome.toLowerCase().includes(busca.toLowerCase()))

  const carregarTarefas = async () => {
    try {
      const response = await apiTarefas.get('/')
      setTarefas(response.data)
    } catch (error) {
      console.log('Erro ao carregar as tarefas: ', error)
    }
  }

  useEffect(() => {
    if (isFocused) carregarTarefas()
  }, [isFocused])

  return (
    <View style={estilos.container}>

      <TextInput
        style={estilos.inputSearch}
        placeholder="Filtrar tarefa..."
        value={busca}
        onChangeText={setBusca}
      />

      <Pressable style={estilos.button} onPress={() => navigation.navigate('Formulário de Tarefas')} >
        <Text style={estilos.buttonText}>NOVA TAREFA</Text>
      </Pressable>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TarefaItem item={item}
            onEdit={() => navigation.navigate('Formulário de Tarefas', { item: item })}
            onDelete={carregarTarefas}
          />
        )}
      >
      </FlatList>

    </View>
  )
}