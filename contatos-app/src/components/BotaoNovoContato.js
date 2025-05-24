import { Button } from "react-native-paper";
import estilos from "./Estilos";

const NovoContato = ({ navigation }) => {
  return (
    <Button
      icon="plus-circle-outline"
      mode="contained"
      style={estilos.button}
      labelStyle={estilos.buttonText} // Estiliza o texto do botão
      onPress={() => navigation.navigate('Formulário')}
    >
      NOVO CONTATO
    </Button>
  );
};

export default NovoContato;