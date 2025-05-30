import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '90%',
    paddingHorizontal: 20,
  },
  contentContainer: {
    paddingVertical: 16,
    gap: 20
  },
  moeda: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#999',
    borderRadius: 12,
    height: 64,
    paddingHorizontal: 20,
    alignItems: 'center',
    boxShadow: '0 8px 8px rgba(0, 0, 0, 0.4)'
  },
  moedaInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  moedaBtn: {
    alignItems: 'center',
  },
  info: {
    backgroundColor: '#999',
    borderRadius: 12,
    height: 120,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 8px rgba(0, 0, 0, 0.4)',
    marginTop: 32
  }
});

export default styles;