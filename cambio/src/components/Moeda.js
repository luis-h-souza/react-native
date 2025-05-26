import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { Menu, IconButton } from 'react-native-paper'
import styles from "./Styles";

export default function Moeda({ item, navigation }) {
    
  return (
    <View style={styles.moeda}>
      <View >
        <Text style={styles.moedaInfo}>{item.simbolo}</Text>
        <Text style={styles.moedaInfo}>{item.nomeFormatado}</Text>
      </View>
      <View style={styles.moedaBtn}>
        <IconButton icon={'arrow-right-thin'} onPress={() => navigation.navigate('ObterCotacao', {item: item}) }/>
      </View>
    </View>
  )
}