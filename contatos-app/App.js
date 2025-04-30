import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ContatoLista from './src/pages/ContatoLista'
import ContatoForm from './src/pages/ContatoForm'
import Home from './src/pages/Home'
import { Provider as PaperProvider } from 'react-native-paper'
import { StatusBar } from 'react-native'

const Stack = createNativeStackNavigator()

// configuração global de telas
const opcoesTela = {
  headerStyle: { backgroundColor: '#E0E3FF' },
  headerTintColor: '#3346F0',
  headerTitleStyle: { fontWeight: 'bold', fontSize: 24 }
}

export default function App() {
  return (
    <PaperProvider>
      {/* statusbardar ou ligth */}
      <StatusBar barStyle='dark-content' backgroundColor='#E0E3FF' />
      <NavigationContainer>
        <Stack.Navigator inicialRouteName='Home' screenOptions={opcoesTela} >
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name='Listagem'
            component={ContatoLista}
            options={{ title: 'Lista de Contatos' }}
          />
          <Stack.Screen
            name='Formulário'
            component={ContatoForm}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}