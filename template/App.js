import clsx from 'clsx';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)

  const handleEmailChange =(text) => {
    setEmail(text)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsValidEmail(emailRegex.test(text))
  }
  const handlePhoneChange =(text) => {
    setPhone(text)
  }

  return (
    <View style={formatacao.container}>
      <Text style={formatacao.titulo}>Formulário</Text>

      <TextInput
        style={[formatacao.input, !isValidEmail && formatacao.inputInvalid]}
        value={email}
        onChangeText={handleEmailChange}
        placeholder='Digite seu email'
        keyboardType='email-address'
      />

      <TextInput 
        style={[formatacao.input, !isValidEmail && formatacao.inputInvalid]}
        value={phone}
        onChangeText={handlePhoneChange}
        placeholder='Digite seu telefone'
        keyboardType='phone-pad'
      />

      <Pressable style={formatacao.btn}>
        <Text style={formatacao.btnText}>Entrar</Text>
      </Pressable >

      <StatusBar style="auto" />
    </View>
  );
}

const formatacao = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d565'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 24
  },
  btn: {
    backgroundColor: '#b5b5',
    padding: 24,
    width: 300,
    borderRadius: 8,
    marginBlock:24,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  input: {
    height: 56,
    width: 300,
    borderColor: '#000',
    borderWidth: 1,
    padding: 16,
    marginBlock: 12,
    backgroundColor: '#fffff',
    borderRadius: 8,
    marginVertical: 24
  },
  inputInvalid: {
    borderColor: 'red',
  },
});
