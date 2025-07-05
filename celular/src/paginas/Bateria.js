import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as Battery from 'expo-battery';

export default function Bateria() {
  const [nivelBateria, setNivelBateria] = useState(null);

  useEffect(() => {
    (async () => {
      const nivel = await Battery.getBatteryLevelAsync();
      setNivelBateria(nivel);
    })();

    // Listener para atualizar em tempo real
    const subscription = Battery.addBatteryLevelListener(({ nivelBateria }) => {
      setNivelBateria(nivelBateria);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nível da Bateria</Text>
      {nivelBateria === null ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text style={styles.battery}>
          {Math.round(nivelBateria * 100)}%
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1f2937',
  },
  battery: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#16a34a',
  },
});
