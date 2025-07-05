import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, Alert } from 'react-native'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'

export default function MapaLocalizacao() {
  // Estado para armazenar a localização atual do usuário
  // e o estado de carregamento
  const [localizacao, setLocalizacao] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let subscription

    (async () => {
      // Solicita permissão para acessar a localização do usuário
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'É necessário permitir a localização para usar o mapa.')
        setLoading(false)
        return
      }


      /* Inicia o rastreamento da localização
      * A função watchPositionAsync permite receber atualizações contínuas da localização
      * com base em intervalos de tempo e distância.
      */
      subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,       // tempo mínimo entre atualizações (5 segundos)
          distanceInterval: 2,      // distância mínima em metros para atualizar
        },
        (localizacao) => {
          setLocalizacao(localizacao.coords)  
          setLoading(false)
        }
      )
    })()

    // Cancela a assinatura ao desmontar o componente
    // Isso é importante para evitar vazamentos de memória
    // e garantir que não continuemos recebendo atualizações quando o componente não estiver mais ativo
    return () => {
      if (subscription) subscription.remove()
    }
  }, [])

  if (loading || !localizacao) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Localizando...</Text>
      </View>
    )
  }

  return (
    <MapView
      style={styles.map}
      region={{
        latitude: localizacao.latitude,
        longitude: localizacao.longitude,
        latitudeDelta: 0.005,   // delta de latitude para zoom (menor valor = mais zoom)
        longitudeDelta: 0.005,  // delta de longitude para zoom (menor valor = mais zoom)
      }}
    >
      <Marker
        coordinate={{
          latitude: localizacao.latitude,
          longitude: localizacao.longitude,
        }}
        title="Você está aqui"
      />

    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
