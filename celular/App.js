// import React from "react"
// import Routes from "./src/navigation/routes"
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import Home from "./src/paginas/Home";
import Sobre from "./src/paginas/Sobre";
import Contato from "./src/paginas/Contato";
import Camera from "./src/paginas/Camera";
import Bateria from "./src/paginas/Bateria";
import Dispositivo from "./src/paginas/Dispositivo";
import Brilho from "./src/paginas/Brilho";
import Rede from "./src/paginas/Rede";
import Mapa from "./src/paginas/Mapa";
import Multistep from "./src/paginas/Multistep";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: "Início" }} />
      <Stack.Screen name="Camera" component={Camera} options={{ title: "Câmera" }} />
      <Stack.Screen name="Bateria" component={Bateria} options={{ title: "Bateria" }} />
      <Stack.Screen name="Rede" component={Rede} options={{ title: "Rede" }} />
      <Stack.Screen name="Dispositivo" component={Dispositivo} options={{ title: "Informações" }} />
      <Stack.Screen name="Brilho" component={Brilho} options={{ title: "Brilho" }} />
      <Stack.Screen name="Mapa" component={Mapa} options={{ title: "Mapa" }} />
      <Stack.Screen name="Multistep" component={Multistep} options={{ title: "Multi-step" }} />
    </Stack.Navigator>
  );
}

export default function App() {
  // return <Routes />
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Início") iconName = "home";
            else if (route.name === "Sobre") iconName = "information-circle";
            else if (route.name === "Contatos") iconName = "call";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Início" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Contatos" component={Contato} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}