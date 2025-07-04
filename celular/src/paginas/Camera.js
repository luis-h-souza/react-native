import React, { useState, useEffect } from 'react'
import { Button, Image, View, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'

export default function ImagePickerExample() {
  const [foto, setFoto] = useState(null)
  const [permissaoGaleria, setPermissaoGaleria] = useState(null)

  useEffect(() => {
    // Solicita permissão para salvar na galeria ao abrir o app
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync()
      setPermissaoGaleria(status === 'granted')
    })()
  }, [])

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos da permissão para acessar a câmera!')
      return
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [3, 4],
      quality: 1,
    })

    if (!result.canceled) {
      setFoto(result.assets[0].uri)
    }
  }

  const salvarNaGaleria = async () => {
    if (!permissaoGaleria) {
      Alert.alert('Sem permissão', 'Permissão para acessar a galeria foi negada.')
      return
    }

    try {
      await MediaLibrary.saveToLibraryAsync(foto)
      Alert.alert('Sucesso', 'Imagem salva na galeria!')
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a imagem.')
      console.error(error)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Tirar uma foto" onPress={pickImage} />

      {foto && (
        <>
          <Image source={{ uri: foto }} style={{ width: 400, height: 400, marginVertical: 20 }} />
          <Button title="Salvar na galeria" onPress={salvarNaGaleria} />
        </>
      )}
    </View>
  )
}
