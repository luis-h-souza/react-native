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
    marginBlock: 20,
    alignContent: 'start'
  },
  titulo: {
    marginBlock: 20,
    fontSize: 24,
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
    backgroundColor: '#5e8e',
    marginBlock: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  btnTxt: {
    fontSize: 24,
    padding: 0,
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 20,
    right: 6
  },
  resultado: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:20
  },
  gradiente: {
    width: '100%',
    height: '100%',
  },
  gradienteBtn: {
  width: 100,
  height: 100,
  borderRadius: 100/2,
  position: 'absolute',
  bottom: 60,
  }
});

export default styles;