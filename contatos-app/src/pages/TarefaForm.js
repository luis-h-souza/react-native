import React, { useEffect, useState } from "react"
import { View, Text, TextInput, Button, FlatList, Alert, Pressable } from "react-native"
import { api, apiTarefas } from "../services/Api"
import estilos from "../components/Estilos"
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

export default function TarefaForm({ navigation, route }) {

  const [responsavel, setResponsavel] = useState("");
  const [idResponsavel, setIdResponsavel] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");
  const [contato, setContatos] = useState([])
  const [dataInicial, setDataInicial] = useState(new Date());
  const [prazo, setPrazo] = useState(new Date());

  const [mostarInicioDatePicker, setMostarInicioDatePicker] = useState(false);
  const [mostarFimDatePicker, setMostarFimDatePicker] = useState(false);

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
      const apenasData = selectedDate.toISOString().split("T")[0];
      setPrazo(apenasData); // Atualiza o estado com a data selecionada como string
    }
  };

  const itensTarefa = route.params?.item;

  useEffect(() => {
    const carregarContatos = async () => {
      try {
        const response = await api.get("/");
        const data = response.data;
        const contatoArray = Array.isArray(data) ? data : [data];
        setContatos(contatoArray);

        if (itensTarefa) {
          setResponsavel(itensTarefa.responsavel);
          setIdResponsavel(itensTarefa.idResponsavel || '');
        }
      } catch (error) {
        Alert.alert("Erro, não foi possível carregar a lista de contatos.")
        console.error(error);
      }
    }

    carregarContatos();

    if (itensTarefa) {
      setDataInicial(new Date(itensTarefa.dataInicial));
      setPrazo(new Date(itensTarefa.prazo));
      setResponsavel(itensTarefa.responsavel);
      setDescricao(itensTarefa.descricao);
      setStatus(String(itensTarefa.status));
    }
  }, [itensTarefa])

  const salvarTarefa = async () => {

    // verifica se todos os campos estão preenchidos
    if (!dataInicial || !prazo || !idResponsavel || !descricao || !status) {
      Alert.alert("Atenção!", "Todos os campos são obrigatórios.");
      return;
    }

    try {
      if (itensTarefa) {
        const res = await apiTarefas.put(`/${itensTarefa.id}`, {
          data: dataInicial,
          prazo,
          responsavel: idResponsavel,
          descricao,
          status
        });
        console.log(res)

      } else {
        await apiTarefas.post("/", {
          data: dataInicial,
          prazo,
          responsavel: idResponsavel,
          descricao,
          status
        });
        
      }
      // Volta para a lista de contatos
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro ao salvar tarefa!", error.message);
    }
  };
  console.log([dataInicial, prazo, idResponsavel, descricao, status])

  return (
    <View style={estilos.container}>
      <Text style={estilos.h2}>Preencha todos os campos abaixo:</Text>

      <View style={estilos.inputSexo}>
        <Picker
          itemStyle={{ height: 100, width: 100, color: 'blue', backgroundColor: '#000' }}
          selectedValue={idResponsavel}
          onValueChange={(itemValue) => setIdResponsavel(itemValue)}
        >
          <Picker.Item label="Selecione o responsável" value="" style={{ color: 'rgba(0, 0, 0, 0.5)' }} />
          {contato.map((contato) => (
            <Picker.Item
              key={contato.id}
              label={`${contato.nome} (${contato.celular})`}
              value={contato.id}
            />
          ))}
        </Picker>
      </View>

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
          value={dataInicial ? new Date(dataInicial).toLocaleDateString() : ""}
          onFocus={() => setMostarInicioDatePicker(true)} // Abre o DatePicker ao focar no campo
          editable={false} // Impede edição direta
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
          editable={false} // Impede edição direta
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