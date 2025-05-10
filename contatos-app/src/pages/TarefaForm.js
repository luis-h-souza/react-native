import React, { useEffect, useState } from "react"
import { View, Text, TextInput, Button, FlatList, Alert, Pressable } from "react-native"
import { api } from "../services/Api"
import estilos from "../components/Estilos"
import DateTimePicker from '@react-native-community/datetimepicker';

export default function TarefaForm({ navigation, route }) {

  const [responsavel, setResponsavel] = useState("");
  const [dataInicial, setDataInicial] = useState(new Date());
  const [prazo, setPrazo] = useState(new Date());
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");

  const [mostarInicioDatePicker, setMostarInicioDatePicker] = useState(false);
  const [mostarFimDatePicker, setMostarFimDatePicker] = useState(false);

  // const onStartDateChange = (event, selectedDate) => {
  //   if (Platform.OS === "android") {
  //     setMostarInicioDatePicker(false); // Fecha o DatePicker no Android
  //   }
  //   if (selectedDate) {
  //     setStartDate(selectedDate); // Atualiza a data
  //   }
  // };

  const onStartDateChange = (event, selectedDate) => {
    if (selectedDate) {
      const apenasData = selectedDate.toISOString().split("T")[0]; // Extrai apenas a data no formato YYYY-MM-DD
      setDataInicial(apenasData); // Atualiza o estado com a data
    }
    setMostarInicioDatePicker(false); // Fecha o DatePicker
  };

  const onEndDateChange = (event, selectedDate) => {
    setMostarFimDatePicker(false); // Fecha o DatePicker após a seleção
    if (selectedDate) {
      setPrazo(selectedDate.toISOString().split("T")[0]); // Atualiza o estado com a data selecionada como string
    }
  };

  const itensTarefa = route.params?.item;

  useEffect(() => {
    if (itensTarefa) {
      setResponsavel(itensTarefa.responsavel);
      setDataInicial(itensTarefa.dataInicial);
      setPrazo(itensTarefa.prazo);
      setDescricao(itensTarefa.descricao);
      setStatus(itensTarefa.status);
    }
  }, [itensTarefa])

  const salvarTarefa = async () => {

    // verifica se todos os campos estão preenchidos
    if (!responsavel || !dataInicial || !prazo || !descricao || !status) {
      Alert.alert("Atenção!", "Todos os campos são obrigatórios.");
      return;
    }

    try {
      if (itensTarefa) {
        await api.put(`/${itensTarefa.id}`, { responsavel, dataInicial, prazo, descricao, status });

      } else {
        console.log({responsavel, dataInicial, prazo, descricao, status})
        await api.post("/", { responsavel, dataInicial, prazo, descricao, status });
      }
      // Volta para a lista de contatos
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro ao salvar tarefa!", error.message);
    }

    console.log("Descrição:", descricao);
    console.log("Status:", status);

  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.h2}>Preencha todos os campos abaixo:</Text>
      <TextInput
        style={estilos.input}
        placeholder="Responsável"
        value={responsavel}
        onChangeText={setResponsavel}
      />

      <View style={estilos.inputContainer}>
        <Pressable style={estilos.buttonData} onPress={() => setMostarInicioDatePicker(true)} >
          <Text style={estilos.buttonText}>Data de Inicio</Text>
          {mostarInicioDatePicker && (
            <DateTimePicker
              testID="startDatePicker"
              value={dataInicial}
              mode="date"
              is24Hour={true}
              display="calendar"
              onChange={onStartDateChange}
            />
          )}
        </Pressable>

        <TextInput
          style={estilos.inputData}
          placeholder="Inicio"
          value={dataInicial ? new Date(prazo).toLocaleDateString() : ""}
          onFocus={() => setMostarInicioDatePicker(true)} // Abre o DatePicker ao focar no campo
          // editable={false} // Impede edição direta
        />
      </View>

      <View style={estilos.inputContainer}>
        <Pressable style={estilos.buttonData} onPress={() => setMostarFimDatePicker(true)} >
          <Text style={estilos.buttonText}>Prazo Final</Text>
          {mostarFimDatePicker && (
            <DateTimePicker
              testID="endDatePicker"
              value={prazo}
              mode="date"
              is24Hour={true}
              display="calendar"
              onChange={onEndDateChange}
            />
          )}
        </Pressable>

        <TextInput
          style={estilos.inputData}
          placeholder="Conclusão em"
          value={prazo ? new Date(prazo).toLocaleDateString() : ""}
          onFocus={() => setMostarFimDatePicker(true)} // Abre o DatePicker ao focar no campo
          // editable={false} // Impede edição direta
        />
      </View>

      <TextInput
        style={estilos.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={estilos.input}
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
      />

      <Pressable style={estilos.button} onPress={salvarTarefa}>
        <Text style={estilos.buttonText}>SALVAR</Text>
      </Pressable>

    </View>
  )
}