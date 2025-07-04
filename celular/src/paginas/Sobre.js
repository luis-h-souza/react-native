import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Sobre = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text>Explora recursos do dispositivo como câmeras, nível de bateria, rede do celular e outros.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
})

export default Sobre
