import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as Battery from 'expo-battery';

export default function BatteryStatus() {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    (async () => {
      const level = await Battery.getBatteryLevelAsync();
      setBatteryLevel(level);
    })();

    // Listener para atualizar em tempo real
    const subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryLevel(batteryLevel);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nível da Bateria</Text>
      {batteryLevel === null ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text style={styles.battery}>
          {Math.round(batteryLevel * 100)}%
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
