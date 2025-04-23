import React, { useState } from "react"
import { View, Text, Button, Alert } from "react-native"
import { Menu, IconButton } from "react-native-paper"
import api from "../services/Api"
import estilos from "./Estilos"

export default function ContatoItem({ item }) {
  const [menuVisivel, setMenuVisivel] = useState(false)

  const opneMenu = () => setMenuVisivel(true)
  const closeMenu = () => setMenuVisivel(false)

  return (
    <View style={estilos.linha}>
      <View style={estilos.linhatitulo}>
        <View style={{ flex: 1 }}>
          <Text style={estilos.nome}>{item.nome}</Text>
        </View>
        <Menu
          visible={menuVisivel}
          onDismiss={closeMenu}
          anchor={
            <IconButton icon={'dots-vertical'} onPress={opneMenu} />
          }
        >
          <Menu.Item title="Editar" />
          <Menu.Item title="Excluir" />
        </Menu>
      </View>

      <Text style={estilos.info}>{item.celular}</Text>
      <Text style={estilos.info}>{item.email}</Text>
    </View>
  )
}