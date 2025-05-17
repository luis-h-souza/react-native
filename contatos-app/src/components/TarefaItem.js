import React, { useState } from "react"
import { View, Text, Button, Alert } from "react-native"
import { Menu, IconButton } from "react-native-paper"
import { apiTarefas } from "../services/Api"
import estilos from "./Estilos"

export default function TerefaItem({ item, onDelete, onEdit }) {
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
      await apiTarefas.delete(`/${item.id}`)
      onDelete()
    } catch (error) {
      Alert.alert('Erro ao excluir contato', error.message)
    }
  }

  return (
    <View style={estilos.linha}>
      <View style={estilos.linhatitulo}>
        <View style={{ flex: 1 }}>
          <Text style={estilos.nome}>{item.responsavel}</Text>
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
      <Text style={estilos.info}><Text style={estilos.spanInfo}>Início:</Text> {item.data}</Text>
      <Text style={estilos.info}><Text style={estilos.spanInfo}>Conclusão em:</Text> {item.prazo}</Text>
      <Text style={estilos.info}><Text style={estilos.spanInfo}>Descrição:</Text> {item.descricao}</Text>
    </View>
  )
}
