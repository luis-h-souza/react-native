import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import * as Device from 'expo-device';

export default function Dispositivo() {
  const info = {
    brand: Device.brand,
    modelName: Device.modelName,
    osName: Device.osName,
    osVersion: Device.osVersion,
    designName: Device.designName,
    productName: Device.productName,
    deviceName: Device.deviceName,
    totalMemory: Device.totalMemory,
    supportedCpuArchitectures: Device.supportedCpuArchitectures,
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Informações do dispositivo:</Text>
      {Object.entries(info).map(([key, value]) => (
        <Text key={key} style={styles.item}>
          {key}: {JSON.stringify(value)}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 5 },
});
