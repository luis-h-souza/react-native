import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { View } from "react-native";
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import Contato from "./src/pages/Contato";

// cria o componente de abas
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let icon
            if (route.name === "Inicio") icon = 'home'
            else if (route.name === "Sobre") icon = 'informarion-circle'
            else if (route.name === "Contato") icon = 'call'
            return <Ionicons name={icon} size={size} color={color} />
          },
        })}
      >
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Sobre" component={Sobre} />
      <Tab.Screen name="Contato" component={Contato} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}