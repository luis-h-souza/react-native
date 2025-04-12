import React, { useEffect, useState } from "react"
import { View, Text, Button,  FlatList } from "react-native"
import { useIsFocused } from "@react-navigation/native"
import api from "../services/Api"
import estilos from "../components/Estilos"
import ContatoItem from "../components/ContatoItem"

export default function ContatoLista() {
  
  return (
    <Text estilos={estilos.container}>Página de lista de Contatos</Text>
  )
}