import React, { useState } from "react"
import { View, Text, Button, Alert } from "react-native"
import { Menu, IconButton } from "react-native-paper"
import {api} from "../services/Api"
import estilos from "./Estilos"

export default function ContatoItem({ item, onDelete, onEdit }) {
  const [menuVisivel, setMenuVisivel] = useState(false)

  const opneMenu = () => setMenuVisivel(true)
  const closeMenu = () => setMenuVisivel(false)

  const confirmarExclusao = () => {
    closeMenu();
    Alert.alert(`
      Confirmar Exclusão`,
      `Deseja realmente excluir o contato ${item.nome}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', style: 'destructive', onPress: excluirContato }
      ]
    )
  }

  const excluirContato = async () => {
    try {
      await api.delete(`/${item.id}`)
      onDelete()
    } catch (error) {
      Alert.alert('Erro ao excluir contato', error.message)
    }
  }

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
          <Menu.Item title="Editar" onPress={() => { closeMenu(); onEdit() }} />
          <Menu.Item title="Excluir" onPress={confirmarExclusao} />
        </Menu>
      </View>

      <Text style={estilos.info}>{item.celular}</Text>
      <Text style={estilos.info}>{item.email}</Text>
      <Text style={estilos.info}>{item.idade}</Text>
      <Text style={estilos.info}>{item.sexo}</Text>
    </View>
  )
}