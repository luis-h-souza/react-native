import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ContatoLista from './src/pages/ContatoLista'
import ContatoForm from './src/pages/ContatoForm'
import { Provider as PaperProvider } from 'react-native-paper'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator inicialRouteName='Listagem'>
          <Stack.Screen
            name='Listagem'
            component={ContatoLista}
            options={{
              headerStyle: {
              backgroundColor: '#E0E3FF'
              }
            }} />
          <Stack.Screen
          name='Formulário'
          component={ContatoForm} 
          options={{
            headerStyle: {
            backgroundColor: '#E0E3FF'
            }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}