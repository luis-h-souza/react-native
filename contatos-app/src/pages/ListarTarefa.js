import React, { useEffect, useState } from "react";
import { View, Text, Pressable, TextInput, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { apiTarefas } from "../services/Api";
import estilos from "../components/Estilos";
import TarefaItem from "../components/TarefaItem";
import FiltroStatus from "../components/FiltroStatus";

export default function ListarTarefa({ navigation }) {

  const [tarefas, setTarefas] = useState([]);
  const [tarefasFiltadas, setTarefasFiltradas] = useState([]);
  const [statusSelecionado, setStatusSelecionado] = useState([]);
  const isFocused = useIsFocused();

  // filtro das tarefas de acordo com o status selecionado
  const filtrarPorStatus = (status, dados = tarefas) => {

    // modifica o status de acordo com a seleção do usuário
    setStatusSelecionado(status)

    if (!status) {
      setTarefasFiltradas(dados)
    } else {
      // filtra as tarefas de acordo com o status selecionado
      const filtradas = dados.filter((tarefas) => tarefas.status.toLowerCase() === status.toLowerCase())
      setTarefasFiltradas(filtradas)
    }
  }

  const carregarTarefas = async () => {
    try {
      const response = await apiTarefas.get('/')
      setTarefas(response.data)
      setTarefasFiltradas(response.data)
    } catch (error) {
      console.log('Erro ao carregar as tarefas: ', error)
    }
  }

  useEffect(() => {
    if (isFocused) {
      carregarTarefas()
      filtrarPorStatus("", tarefas)
    }
  }, [isFocused])

  return (
    <View style={estilos.container}>

      <FiltroStatus 
        onFiltrar={filtrarPorStatus}
        statusSelecionado={setStatusSelecionado}
      >
      </ FiltroStatus>

      <Pressable style={estilos.button} onPress={() => navigation.navigate('Formulário de Tarefas')} >
        <Text style={estilos.buttonText}>NOVA TAREFA</Text>
      </Pressable>

      <FlatList
        data={tarefasFiltadas}
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