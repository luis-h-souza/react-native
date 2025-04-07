import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput, Pressable } from 'react-native-web';

export default function App() {
  
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = (operacao) => {
    // converte os valores para float
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    const resultadoOperacao = operacao == '+' ? n1 + n2 : n1 * n2;
    
    // mostra o resultado
    setResultado(`Resultado: ${resultadoOperacao}`);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Calculadora</Text>

      <TextInput style={styles.input}
        keyboarType='numeric'
        placeholder='Digite o primeiro número'
        value={numero1}
        onChangeText={setNumero1}
      />
      <TextInput style={styles.input}
        keyboarType='numeric'
        placeholder='Digite o segundo número'
        value={numero2}
        onChangeText={setNumero2}
      />

      <Pressable style={styles.btn} onPress={() => calcular('*')}>
        <Text style={styles.btnTxt}>Multiplicar</Text>
      </Pressable>

      <Button onPress={() => calcular('+')}
      title='Somar'
      color='purple'
      />

      <Text style={styles.resultado}>
        {resultado}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', // Alinhamento horizontal, ao contrário do css normal
    /* justifyContent: 'center',  Alinhamento vertical, ao contrário do css normal*/
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBlock: 20
  },
  input: {
    width: '80%',
    height: 50,
    borderRadius: 16,
    marginBlock: 10,
    padding: 10,
    fontSize: 18,
    backgroundColor: '#d4d4f4'
  },
  btn: {
    width: '60%',
    height: 50,
    borderRadius: 16,
    padding: 16,
    backgroundColor: '#d4d4f4',
    marginBlock: 10,
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d4d4fe'
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e4040e',
  },
  resultado: {
    fontSize: 20,
    marginTop: 24,
    fontWeight: 'bold',
    color: '#2ECC71'
  },
});
