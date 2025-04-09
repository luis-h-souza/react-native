import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import Historico from "./src/pages/Historico";
import { Provider as PaperProvider } from "react-native-paper";

// cria o componente de abas
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let icon
              if (route.name === "Calculadora") icon = 'calculator'
              else if (route.name === "Sobre") icon = 'information-circle'
              else if (route.name === "Historico") icon = 'bookmark'
              return <Ionicons name={icon} size={size} color={color} />
            },
          })}
        >
          <Tab.Screen name="Calculadora" component={Home} />
          <Tab.Screen name="Sobre" component={Sobre} />
          <Tab.Screen name="Historico" component={Historico} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}