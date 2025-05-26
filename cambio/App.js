import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './src/components/Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper'
import MoedaList from './src/pages/MoedaList';
import ObterCotacao from './src/pages/ObterCotacao';

const Stack = createNativeStackNavigator()

const opcoesTela = {
  headerStyle: { backgroundColor: '#222' },
  headerTintColor: '#f2f2f2',
  headerTitleStyle: { fontWeight: 'bold', fontSize: 24 }
}

export default function App() {
  return (
    <PaperProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator inicialRouteName='MoedaList' screenOptions={opcoesTela} >

          <Stack.Screen 
          name='MoedaList' 
          component={MoedaList} 
          options={{ title: 'Lista de Moedas' }}
          />
          <Stack.Screen 
          name='ObterCotacao' 
          component={ObterCotacao} 
          options={{ title: 'Detalhes da Moeda' }}
          />
          </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
