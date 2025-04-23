import { StyleSheet } from "react-native"

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F6F5FC'
  },
  button: {
    backgroundColor: '#5061FC',
    paddingBlock: 14,
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
    marginBottom: 14,
    boxShadow: '0 4px 4px 0 #0000000A'
  },
  nome: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#5061FC',
    textTransform: 'uppercase'
  },
  info: {
    color: '#BCBCBC',
    fontSize: 16,
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
    minWidth: 120,
    borderRadius: 12,
    marginBottom: 16,
    boxShadow: '0 4px 4px 0 #0000000A'
  },
  linhatitulo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})

export default estilos