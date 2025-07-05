import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import * as Brightness from 'expo-brightness'
import Slider from '@react-native-community/slider'

export default function Brilho() {
  const [brightness, setBrightness] = useState(1) // 1 = 100%

  useEffect(() => {
    (async () => {
      // Solicita permissão para modificar o brilho
      const { status } = await Brightness.requestPermissionsAsync()
      if (status === 'granted') {
        const currentBrightness = await Brightness.getBrightnessAsync()
        setBrightness(currentBrightness)
      } else {
        alert("Permissão para alterar brilho negada.")
      }
    })()
  }, [])

  const handleBrightnessChange = async (value) => {
    setBrightness(value)
    await Brightness.setBrightnessAsync(value)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brilho atual: {(brightness * 100).toFixed(0)}%</Text>
      <Slider
        style={{ width: 300 }}
        minimumValue={0.1}
        maximumValue={1}
        value={brightness}
        onValueChange={handleBrightnessChange}
      />
      <Button title="Brilho Máximo" onPress={() => handleBrightnessChange(1)}  style={{ marginVertical: 32 }}/>
      <Button title="Brilho Mínimo" onPress={() => handleBrightnessChange(0.1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
})
