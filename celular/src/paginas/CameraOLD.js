import React, { useState } from 'react';
import { Button, Image, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [foto, setFoto] = useState(null);

  const pickImage = async () => {
    // Pedir permissão
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos da permissão para acessar a câmera!');
      return;
    }

    // Abrir a câmera
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.canceled) {
      setFoto(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Tirar uma foto" onPress={pickImage} />
      {foto && (
        <Image source={{ uri: foto }} style={{ width: 400, height: 400 }} />
      )}
    </View>
  );
}