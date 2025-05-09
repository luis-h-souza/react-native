import { StyleSheet } from "react-native"

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#F6F5FC'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    marginTop: 100,
    color: '#5061FC',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  button: {
    backgroundColor: '#5061FC',
    paddingBlock: 18,
    borderRadius: 12,
    marginBottom: 24,
    boxShadow: '0 4px 4px 0 #0000000A'
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  linha: {
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 3,
    borderLeftColor: '#6674F4',
    borderRadius: 12,
    padding: 10,
    marginBlock: 14,
    boxShadow: '0 4px 4px 0 #0000000A'
  },
  localizacao: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRighttWidth: 3,
    borderRightColor: '#6674F4'
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5061FC',
    textTransform: 'uppercase',
    marginBottom: 10
  },
  spanInfo: {
    fontWeight: 'bold',
    color: '#6674F4',
  },
  info: {
    color: '#BCBCBC',
    fontSize: 16
  },
  h2: {
    fontSize: 22,
    fontbWeight: 'bold',
    color: '#5061FC',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 16,
    paddingLeft: 16,
    minWidth: 120,
    borderRadius: 12,
    marginBottom: 16,
    boxShadow: '0 4px 4px 0 #0000000A',
  },
  inputSexo: {
    minwidth: 120,
    borderRadius: 12,
    borderBottomLeftRadius: 10,
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 4px 0 #0000000A',
    marginBottom: 16
  },
  inputSearch: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 20,
    minWidth: 120,
    borderRadius: 16,
    marginBottom: 16,
    boxShadow: '0 4px 4px 0 #0000000A'
  },
  linhatitulo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})

export default estilos