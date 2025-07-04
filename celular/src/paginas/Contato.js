import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Contato = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text>Informações do contato.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});

export default Contato;
