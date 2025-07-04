// Importação de hooks e componentes do React Native
import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native'

export default function Multistep() {
  // Hook de estado para controlar o passo atual do formulário (de 1 a 4)
  const [step, setStep] = useState(1)

  // Estado que armazena os dados preenchidos pelo usuário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    idade: '',
    cidade: '',
    observacoes: '',
  })

  // Avança para o próximo passo do formulário
  const proximoPasso = () => {
    if (step < 4) setStep(step + 1)
  }

  // Retorna ao passo anterior do formulário
  const passoAnterior = () => {
    if (step > 1) setStep(step - 1)
  }

  // Atualiza um campo específico do formulário
  // prev representa o estado anterior de formData.
  // O operador spread (...) é usado para copiar os dados anteriores e atualizar apenas o campo específico.
  // Isso garante que os outros campos não sejam perdidos ao atualizar um campo específico.
  const atualizarCampo = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Finaliza o formulário exibindo os dados no console e mostrando um alerta
  const confirmar = () => {
    console.log('Dados enviados:', formData)
    alert('Formulário enviado com sucesso!')
  }

  // Função que renderiza os campos do formulário conforme o passo atual
  const etapas = () => {
    switch (step) {
      case 1:
        // Passo 1: Campos Nome e Email
        return (
          <>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
              style={styles.input}
              value={formData.nome}
              onChangeText={value => atualizarCampo('nome', value)}
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={value => atualizarCampo('email', value)}
            />
          </>
        )
      case 2:
        // Passo 2: Campos Idade e Cidade
        return (
          <>
            <Text style={styles.label}>Idade:</Text>
            <TextInput
              style={styles.input}
              value={formData.idade}
              onChangeText={value => atualizarCampo('idade', value)}
              keyboardType="numeric" // Teclado numérico
            />
            <Text style={styles.label}>Cidade:</Text>
            <TextInput
              style={styles.input}
              value={formData.cidade}
              onChangeText={value => atualizarCampo('cidade', value)}
            />
          </>
        )
      case 3:
        // Passo 3: Campo Observações
        return (
          <>
            <Text style={styles.label}>Observações:</Text>
            <TextInput
              style={[styles.input]}
              value={formData.observacoes}
              onChangeText={value => atualizarCampo('observacoes', value)}
            />
          </>
        )
      case 4:
        // Passo 4: Confirmação dos dados
        return (
          <>
            <Text style={styles.label}>Confirme seus dados:</Text>
            <Text>Nome: {formData.nome}</Text>
            <Text>Email: {formData.email}</Text>
            <Text>Idade: {formData.idade}</Text>
            <Text>Cidade: {formData.cidade}</Text>
            <Text>Observações: {formData.observacoes}</Text>
          </>
        )
      default:
        return null
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Formulário Multi-Step</Text>
        <View style={styles.form}>{etapas()}</View>
        <View style={styles.navigation}>
          {step > 1 && <Button title="Voltar" onPress={passoAnterior} />}
          {step < 4 && <Button title="Avançar" onPress={proximoPasso} />}
          {step === 4 && <Button title="Enviar" onPress={confirmar} />}
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginTop: 5,
  },
  navigation: {
    flexDirection: 'row', // Botões lado a lado
    justifyContent: 'space-between', // Espaço entre os botões
  },
})
