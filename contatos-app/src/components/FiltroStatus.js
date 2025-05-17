import React, { useEffect, useState } from "react";
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import estilos from "./Estilos";

const FiltroStatus = ({ onFiltrar, statusSelecionado }) => {

  return (
    <View style={estilos.inputSexo}>
      <Picker
        selectedValue={statusSelecionado}
        onValueChange={(itemValue) => onFiltrar(itemValue)}
      >
        <Picker.Item label='Todos' value='' />
        <Picker.Item label='Novo' value='Novo' />
        <Picker.Item label='Em andamento' value='Em andamento' />
        <Picker.Item label='Cancelado' value='Cancelado' />
        <Picker.Item label='Concluído' value='Concluído' />
      </Picker>
    </View>
  )
}

export default FiltroStatus;