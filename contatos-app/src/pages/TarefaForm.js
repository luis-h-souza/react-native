import React, { useEffect, useState } from "react"
import { View, Text, TextInput, Button, FlatList, Alert, Pressable } from "react-native"
import { api } from "../services/Api"
import estilos from "../components/Estilos"
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function TarefaForm({ navigation, route }) {

  const [responsavel, setResponsavel] = useState("");
  const [dataInicial, setDataInicial] = useState(new Date());
  const [prazo, setPrazo] = useState(new Date());
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");

  const [mostarInicioDatePicker, setMostarInicioDatePicker] = useState(false);
  const [mostarFimDatePicker, setMostarFimDatePicker] = useState(false);

  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setMostarInicioDatePicker(false);
    setDataInicial(currentDate);
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setMostarFimDatePicker(false);
    setPrazo(currentDate);
  };


  const itensTarefa = route.params?.item;
  console.log(itensTarefa)

  useEffect(() => {
    if (itensTarefa) {
      setResponsavel(itensTarefa.responsavel);
      setData(itensTarefa.data);
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
        await api.put(`/${itensTarefa.id}`, { responsavel, data, prazo, descricao, status });
      } else {
        await api.post("/", { responsavel, data, prazo, descricao, status });
      }
      // Volta para a lista de contatos
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro ao salvar tarefa!", error.message);
    }
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
      <TextInput
        style={estilos.input}
        placeholder="Inicio"
        value={dataInicial}
        onChangeText={setDataInicial}
      />
      <TextInput
        style={estilos.input}
        placeholder="Conclusão em"
        value={prazo}
        onChangeText={setPrazo}
      />
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

      <Button title="Select Start Date" onPress={() => setMostarInicioDatePicker(true)} />
        {mostarInicioDatePicker && (
          <DateTimePicker
            testID="startDatePicker"
            value={startDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onStartDateChange}
          />
        )}

        <Text>{`Start Date: ${dataInicial.toLocaleDateString()}`}</Text>

        <Button title="Select End Date" onPress={() => setMostarFimDatePicker(true)} />
        {mostarFimDatePicker && (
          <DateTimePicker
            testID="endDatePicker"
            value={prazo}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onEndDateChange}
          />
        )}
        <Text>{`End Date: ${prazo.toLocaleDateString()}`}</Text>

    </View>
  )
}