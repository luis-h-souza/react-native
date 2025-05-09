<!--
TEXTOS
- Você ainda não tem nenhum contato cadastrado!
Clique no botão ”Novo contato” à cima para cadastrar o seu primeiro!
- Ocorreu um erro ao obter os seus contatos!
- Nenhum resultado foi encontrado para ”Zézinho”.

FONT
font-family: Sora;

COLORS
  #F6F5FC -> BG
  #E0E3FF -> BG Label
  #6200ee
  #6674F4
  #5061FC -> botão
  #3346F0
  #51CA73 -> sucesso
  #F97171
  #FC5050 -> danger
  #F63131
  #222222 -> H2
  #7A7A7A
  #BCBCBC -> info / divisor
  #E6E6E6
  #FFFFFF -> textBtn
  box-shadow: 0px 4px 10px 0px #0000000A;

radios btn 4px

SearchBar:
width: 500;
height: 50;
top: 149px;
left: 390px;
border-radius: 25px;

TYPOGRAPHY
  H2 -> font-size: 22px;
  font-weight: 700;
  line-height: normal;

  H3 -> font-size: 20px;
  font-weight: 700;
  line-height: normal;

  capition -> font-size: 12px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  body medium
  bold -> font-size: 16px;
  font-weight: 700;
  line-height: normal;
  semibold -> font-size: 16px;
  font-weight: 600;
  line-height: normal;
  regular -> font-size: 16px;
  font-weight: 400;
  line-height: normal;

  body small
  regular -> font-size: 14px;
  font-weight: 400;
  line-height: normal;

-->

import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginBottom: 20 }}>
        <Button title="Select Start Date" onPress={() => setShowStartDatePicker(true)} />
        {showStartDatePicker && (
          <DateTimePicker
            testID="startDatePicker"
            value={startDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onStartDateChange}
          />
        )}
        <Text>{`Start Date: ${startDate.toLocaleDateString()}`}</Text>
      </View>
      <View>
        <Button title="Select End Date" onPress={() => setShowEndDatePicker(true)} />
        {showEndDatePicker && (
          <DateTimePicker
            testID="endDatePicker"
            value={endDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onEndDateChange}
          />
        )}
        <Text>{`End Date: ${endDate.toLocaleDateString()}`}</Text>
      </View>
    </View>
  );
};

export default App;