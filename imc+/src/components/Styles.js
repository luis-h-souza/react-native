import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    paddingHorizontal: 20,
  },
  h1: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#F23869',
    marginBlock: 24,
  },
  titulo: {
    marginBlock: 24,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F23869',
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
    color: '#d4d4f4'
  },
  classificacao: {
    fontSize: 18,
    textAlign: 'center',
    color: '#d4d4f4'
  },
  input: {
    width: '90%',
    height: 60,
    borderRadius: 16,
    padding: 10,
    fontSize: 18,
    backgroundColor: '#d4d4f4'
  },
  btn: {
    width: '80%',
    height: 60,
    borderRadius: 16,
    backgroundColor: '#EB335C',
    marginBlock: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    boxShadow: "0 2px 4px #000"
  },
  botao: {
    marginBlock: 20,
    backgroundColor: '#5e8e',
  },
  bt:{
    marginTop: 180,
    boxShadow: "0 2px 2px #0c0c0c",
  },
  btnTxt: {
    minWidth: 100,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:32
  },
  gradiente: {
    width: '100%',
    height: '100%',
  },
});

export default styles;