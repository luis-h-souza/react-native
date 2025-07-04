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
    paddingBlock: 14,
    borderRadius: 16,
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
  localizacaoContainer: {
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 3,
    borderLeftColor: '#6674F4',
    borderRadius: 12,
    alignItems: 'center',
    textAlign: 'justify',
    padding: 10,
    marginTop: 20,
    boxShadow: '0 4px 4px 0 #0000000A',
  },
  localizacao: {
    maxWidth: 'fit-content',
    textAlign: 'justify',
    borderRighttWidth: 3,
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
    minWidth: 120,
    borderRadius: 12,
    borderBottomLeftRadius: 10,
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 4px 0 #0000000A',
    marginVertical: 18
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
  inputContainer: {
    height: '80',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonData: {
    height: '50',
    width: '160',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#5061FC',
    paddingBlock: 12,
    paddingInline: 12,
    borderRadius: 12,
    boxShadow: '0 4px 4px 0 #0000000A'
  },
  inputData: {
    backgroundColor: '#FFFFFF',
    paddingBlock: 12,
    paddingInline: 12,
    paddingLeft: 16,
    width: '180',
    height: '50',
    borderRadius: 12,
    boxShadow: '0 4px 4px 0 #0000000A',
  }
})

export default estilos