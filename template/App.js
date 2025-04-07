import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={formatacao.container}>
      <Text style={formatacao.titulo}>My first App!</Text>
      <Button style={formatacao.btn}>clicar aqui!</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const formatacao = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#f4f4f4',
    fontWeight: 'bold',
    fontSize: 22,
  },
  btn: {
    backgroundColor: '#f4f4f4',
    padding: '16px',
  },
});
