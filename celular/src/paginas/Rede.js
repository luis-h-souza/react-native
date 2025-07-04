import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import * as Network from 'expo-network'
import * as Location from 'expo-location'

export default function Rede() {
  const [networkInfo, setNetworkInfo] = useState(null)
  const [wifiName, setWifiName] = useState('Desconhecido')

  useEffect(() => {
    (async () => {
      // Solicitar permissão de localização para obter o nome da rede Wi-Fi
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'Permissão de localização é necessária para obter o nome da rede Wi-Fi.')
      }

      // Obter informações da rede
      const info = await Network.getNetworkStateAsync()
      setNetworkInfo(info)

      // Obter nome da rede Wi-Fi, se possível
      if (info.type === 'WIFI') {
        const ssid = await Network.getWifiSSIDAsync()
        setWifiName(ssid || 'Não identificado')
      }
    })()
  }, [])

  if (!networkInfo) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
        <Text>Verificando conexão...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Status da Rede</Text>
      <Text>Conectado: {networkInfo.isConnected ? 'Sim' : 'Não'}</Text>
      <Text>Internet Ativa: {networkInfo.isInternetReachable ? 'Sim' : 'Não'}</Text>
      <Text>Tipo de Conexão: {networkInfo.type}</Text>
      {networkInfo.type === 'WIFI' && (
        <Text>Nome da Rede Wi-Fi: {wifiName}</Text>
      )}
      <Text style={styles.details}>
        {JSON.stringify(networkInfo, null, 2)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  details: {
    marginTop: 20,
    fontSize: 12,
    color: '#666',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
