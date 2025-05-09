import React, { useState } from "react"
import { View, Text, Button, Alert } from "react-native"
import { Menu, IconButton } from "react-native-paper"
import { apiTarefas } from "../services/Api"
import estilos from "./Estilos"

export default function TerefaItem({ item }) {

  return (
    <View style={estilos.linha}>
      <View style={estilos.linhatitulo}>
        <View style={{ flex: 1 }}>
          <Text style={estilos.nome}>{item.responsavel}</Text>
        </View>
      </View>
      <Text style={estilos.info}><Text style={estilos.spanInfo}>Início:</Text> {item.data}</Text>
      <Text style={estilos.info}><Text style={estilos.spanInfo}>Conclusão em:</Text> {item.prazo}</Text>
      <Text style={estilos.info}><Text style={estilos.spanInfo}>Descrição:</Text> {item.descricao}</Text>
    </View>
  )
}
