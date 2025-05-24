import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moeda: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    border: '1px solid black'
  },
  moedaInfo: {
    fontSize: '20px',
    fontWeight: 'bold',
    
  },
  moedaBtn: {
    alignItems: 'center'
  }
});

export default styles;