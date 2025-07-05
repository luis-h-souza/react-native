import React from "react"
import { View, StyleSheet } from "react-native"
import { Button, Text } from "react-native-paper"

const Home = ({ navigation }) => {

  const buttons = [
    { title: "Câmera", route: "Camera" },
    { title: "Rede do celular", route: "Rede" },
    { title: "Bateria", route: "Bateria" },
    { title: "Brilho", route: "Brilho" },
    { title: "Informações", route: "Dispositivo" },
    { title: "Localização", route: "Mapa" },
    { title: "Multi-step", route: "Multistep" },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Celular</Text>
      <View style={styles.grid}>
        {buttons.map((btn, index) => (
          <Button
            key={index}
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate(btn.route)}
          >
            {btn.title}
          </Button>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    width: 210,
    margin: 10,
  },
})

export default Home