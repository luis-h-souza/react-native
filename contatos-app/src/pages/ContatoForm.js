import React, { useEffect, useState } from "react"
import { View, Text, TextInput, Button,  FlatList, Alert } from "react-native"
import api from "../services/Api"
import estilos from "../components/Estilos"

export default function ContatoForm() {
  
  return (
    <Text estilos={estilos.container}>Página de Formulário</Text>
  )
}