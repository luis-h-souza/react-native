import React, { useEffect, useState } from "react"
import { View, Text, TextInput, Button, FlatList, Alert, Pressable } from "react-native"
import {api} from "../services/Api"
import estilos from "../components/Estilos"
import { Picker } from "@react-native-picker/picker"

export default function ContatoForm({ navigation, route }) {
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");

  const itensContato = route.params?.item;
  console.log(itensContato)

  useEffect(() => {
    if (itensContato) {
      setNome(itensContato.nome);
      setCelular(itensContato.celular);
      setEmail(itensContato.email);
      setIdade(itensContato.idade);
      setSexo(itensContato.sexo);
    }
  }, [itensContato])

  const salvarContato = async () => {
    // Função para validar e-mail
    const validarEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email.trim()); // Remove espaços em branco antes de validar
    };

    // Verifica se todos os campos estão preenchidos
    if (!nome || !celular || !email || !idade || !sexo) {
      Alert.alert("Atenção!", "Todos os campos são obrigatórios.");
      return;
    }

    // Valida o e-mail
    if (!validarEmail(email)) {
      Alert.alert("Atenção!", "E-mail inválido.");
      return;
    }

    // Chamar a API para gravar os dados
    try {
      if (itensContato) {
        await api.put(`/${itensContato.id}`, { nome, celular, email, idade, sexo });
      } else {
        await api.post("/", { nome, celular, email, idade, sexo });
      }
      // Volta para a lista de contatos
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro ao salvar o contato.", error.message);
    }
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.h2}>Preencha todos os campos abaixo:</Text>
      <TextInput
        style={estilos.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={estilos.input}
        placeholder="Celular"
        value={celular}
        onChangeText={setCelular} 
      />
      <TextInput
        style={estilos.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail} 
        keyboardType="email-address" // Define o teclado para e-mail
        autoCapitalize="none" // Evita capitalização automática
      />
      <TextInput
        style={estilos.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade} 
        autoCapitalize="none"
      />
      <View style={estilos.inputSexo}>
        <Picker selectedValue={sexo} onValueChange={itemValue => setSexo(itemValue)} >
          <Picker.Item label="Selecione o sexo" value="" style={{ color: 'rgba(0, 0, 0, 0.5)' }} />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
      </View>

      <Pressable style={estilos.button} onPress={salvarContato}>
        <Text style={estilos.buttonText}>SALVAR</Text>
      </Pressable>
    </View>
  );
}