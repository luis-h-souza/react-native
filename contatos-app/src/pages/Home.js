import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import estilos from "../components/Estilos"
import { Button, Text } from "react-native-paper";
import * as Location from "expo-location"

export default function Home({ navigation }) {

  const [localizacao, setLocalizacao] = useState(null)
  const [erro, setErro] = useState(null)

  const verificarLocalizacao = false

  async function detectarLocalizacao() {
    try {
      // Pedir permissão do usuário para rastrear sua localização
      // Desestruturação do objeto
      let { status } = await Location.requestForegroundPermissionsAsync({})
      // console.log(localizacao)
      if (status != "granted") {
        setErro('Permissão negada para acessar a localiação.')
        return
      }

      // Havendo permissão, obter as coordenadas
      let localiaçãoAtual = await Location.getCurrentPositionAsync({})

      // Obeter o endereço
      let endereco = await Location.reverseGeocodeAsync({
        latitude: localiaçãoAtual.coords.latitude,
        longitude: localiaçãoAtual.coords.longitude
      })
      if (endereco.length > 0) {
        // console.log(endereco)
        let local = endereco[0]
        // Atualizar o estado com as coordenadas
        setLocalizacao(`
          ${local.street}, Nº ${local.streetNumber}, ${local.district} ${local.subregion} - ${local.region}, ${local.country} CEP: ${local.postalCode}
        `)

      }
    } catch (e) {
      setErro('Erro ao detectar a localização.')
    }
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>
        Bem Vindo ao App de Contatos
      </Text>

      <Button style={estilos.button} mode="contained" onPress={() => navigation.navigate('Lista de Contatos')} icon={"format-list-bulleted-square"} labelStyle={estilos.buttonText}>
        LISTA DE CONTATOS
      </Button>

      <Button style={estilos.button} mode="contained" onPress={() => navigation.navigate('Lista de Tarefas')} icon={"plus-circle-outline"} labelStyle={estilos.buttonText}>
        LITA DE TAREFAS
      </Button>

      <Button style={estilos.button} mode="contained" labelStyle={estilos.buttonText} icon={'map-marker'} onPress={detectarLocalizacao}>
        DETECTAR LOCALIZAÇÃO
      </Button>

      {localizacao &&
        <View style={estilos.localizacaoContainer}>
          <View style={estilos.localizacao}>
            {localizacao && <Text style={estilos.h2}>Sua localização:</Text>}
            {localizacao &&
              <Text style={estilos.info}>{localizacao}</Text>}
            {erro && <Text>{erro}</Text>}
          </View>
        </View>
      }
    </View>
  )
}