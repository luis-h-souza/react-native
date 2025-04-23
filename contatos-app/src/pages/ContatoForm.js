import React, { useEffect, useState } from "react"
import { View, Text, TextInput, Button, FlatList, Alert, Pressable } from "react-native"
import api from "../services/Api"
import estilos from "../components/Estilos"

export default function ContatoForm({ navigation }) {
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");

  const salvarContato = async () => {
    // Função para validar e-mail
    const validarEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email.trim()); // Remove espaços em branco antes de validar
    };

    // Verifica se todos os campos estão preenchidos
    if (!nome || !celular || !email) {
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
      await api.post("/", { nome, celular, email });
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
        onChangeText={setNome} // Corrigido para onChangeText
      />
      <TextInput
        style={estilos.input}
        placeholder="Celular"
        value={celular}
        onChangeText={setCelular} // Corrigido para onChangeText
      />
      <TextInput
        style={estilos.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail} // Corrigido para onChangeText
        keyboardType="email-address" // Define o teclado para e-mail
        autoCapitalize="none" // Evita capitalização automática
      />
      <Pressable style={estilos.button} onPress={salvarContato}>
        <Text style={estilos.buttonText}>SALVAR</Text>
      </Pressable>
    </View>
  );
}