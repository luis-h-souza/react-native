import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../components/Styles';
import BotaoCalcular from '../components/BotaoCalcular';

const  Sobre = () => {
  return (
    <LinearGradient
        colors={['#66687D', '#4C4C68', '#4C4C68']}
        style={styles.gradiente}
        start={{ x: 0.8, y: 0 }}
        end={{ x: 0.2, y: 1 }}
        locations={[0, 0.5, 1]}
        >
    <View style={styles.container}>
      <Text style={styles.titulo}>Página SOBRE !!!</Text>
      <Text style={styles.texto}>Este é o conteúdo.</Text>

      <BotaoCalcular />
      
    </View>
    </LinearGradient>
  );
}
export default Sobre;