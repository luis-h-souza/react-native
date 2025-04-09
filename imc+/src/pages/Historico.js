import { ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../components/Styles';
import BotaoCalcular from '../components/BotaoCalcular';

const Historico = () => {
  return (
    <LinearGradient
      colors={['#66687D', '#4C4C68', '#4C4C68']}
      style={styles.gradiente}
      start={{ x: 0.8, y: 0 }}
      end={{ x: 0.2, y: 1 }}
      locations={[0, 0.5, 1]}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h1}>Histórico de IMC</Text>

        <View style={styles.container}>
          <Text style={styles.texto}>IMC: xxxx</Text>
          <Text style={styles.texto}>Classificação: xxxx</Text>
          <Text style={styles.texto}>Data/Hora: xxxx</Text>

          <BotaoCalcular />

        </View>
      </ScrollView>
    </LinearGradient>
  );
}
export default Historico;