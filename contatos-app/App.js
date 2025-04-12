import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ContatoLista from './src/pages/ContatoLista'
import ContatoForm from './src/pages/ContatoForm'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator inicialRouteName='Listagem'>
        <Stack.Screen name='Listagem' cmponent={ContatoLista} />
        <Stack.Screen name='Formulário' cmponent={ContatoForm} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}