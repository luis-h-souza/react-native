import { Pressable, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../components/Styles';
import { useState } from 'react';
import BotaoCalcular from '../components/BotaoCalcular';
import { Button } from 'react-native-paper';

// chave de identificação do histórico
const STORAGE_KEY = '@historico_imc';

const Home = () => {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [cor, setCor] = useState('#fff');
  const [classificacao, setClassificacao] = useState('');

  const salvarNoHistorico = async (novoRegistro) => {
    try {
      const json = await AsyncStorage.getItem(STORAGE_KEY);
      const historicoAtual = json ? JSON.parse(json) : [];
      const novoHistorico = [novoRegistro, ...historicoAtual];
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novoHistorico));
    } catch (e) {
      console.error("Erro ao salvar histórico:", e);
    }
  };

  const calcular = () => {

    // converte os valores para float
    const p = parseFloat(peso.replace(',', '.'));
    const a = parseFloat(altura.replace(',', '.'));

    if (p > 0 && a > 0) {
      // claculo do IMC
      const imc = (p / (a * a)).toFixed(2);

      let corAtual = '';
      let classificacaoAtual = '';

      if (imc < 18.5) {
        setResultado(`Seu IMC é de: ${imc}`)
        classificacaoAtual = "Você está abaixo do peso ideal."
        corAtual = '#4A90E2';
      } else if (imc >= 18.5 && imc < 24.9) {
        setResultado(`Seu IMC é de: ${imc}`)
        classificacaoAtual = 'Você está com o peso ideal.'
        corAtual = '#2ECC71';
      } else if (imc >= 25 && imc < 29.9) {
        setResultado(`Seu IMC é de: ${imc}`)
        classificacaoAtual = 'Você está com sobrepeso.'
        corAtual = '#F1C40F'
      } else if (imc >= 30 && imc < 34.9) {
        setResultado(`Seu IMC é de: ${imc}`)
        classificacaoAtual = 'Você está em obesidade grau I.'
        corAtual = '#E67E22';
      } else if (imc >= 35 && imc < 39.9) {
        setResultado(`Seu IMC é de: ${imc}`)
        classificacaoAtual = 'Você está em obesidade grau II.'
        corAtual = '#D35400';
      } else if (imc >= 40) {
        setResultado(`Seu IMC é de: ${imc}`)
        classificacaoAtual = 'Você está em obesidade grau III.'
        corAtual = '#C0392B';

      } else {
        setResultado(`Valor não encontrado.`);
      }

      setClassificacao(classificacaoAtual);
      setCor(corAtual);

      console.log(`Seu IMC é de: ${imc}`)

      const dataHora = new Date().toLocaleString()
      const novoRegistro = {
        imc: imc,
        classificacao: classificacaoAtual,
        dataHora: dataHora,
      }
      salvarNoHistorico(novoRegistro)
    }
  }

  return (
    <LinearGradient
      colors={['#66687D', '#4C4C68', '#4C4C68']}
      style={styles.gradiente}
      start={{ x: 0.8, y: 0 }}
      end={{ x: 0.2, y: 1 }}
      locations={[0, 0.5, 1]}
    >

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>

          <Text style={styles.h1}>IMC+</Text>

          <Text style={styles.titulo}>Peso</Text>
          <TextInput style={styles.input}
            keyboardType='numeric'
            placeholder='Digite seu peso (Kg)'
            value={peso}
            onChangeText={setPeso}
          />

          <Text style={styles.titulo}>Altura</Text>
          <TextInput style={styles.input}
            keyboardType='numeric'
            placeholder='Digite sua altura x.xx'
            value={altura}
            onChangeText={setAltura}
          />

          <Text style={[styles.resultado, { color: cor }]} >
            {resultado}
          </Text>
          {classificacao && <Text style={styles.classificacao}> Classificação: {classificacao}</Text>}

          <Pressable
            style={[styles.btn, styles.bt]}
            onPress={calcular}
          >
            <Text style={styles.btnTxt}>
              Calcular
            </Text>
          </Pressable>

        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}
export default Home;