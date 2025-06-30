import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

// Componente CustomTabBar recebe as props do Tab Navigator
export function CustomTabBar({ state, descriptors, navigation }) {
  return (
    // Container principal da TabBar
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Mapeia cada rota (aba) definida no Tab Navigator */}
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          // Verifica se a aba está selecionada
          const isFocused = state.index === index;

          // Função chamada ao pressionar a aba
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            // Navega para a rota se ela não estiver selecionada
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // Função chamada ao pressionar e segurar a aba
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          // Renderiza o botão da aba
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}
            >
              <View style={{ alignItems: 'center', padding: 4 }}>
                {/* Ícone da aba, muda de cor se estiver selecionada */}
                <View style={{ padding: 8, borderRadius: 99, backgroundColor: isFocused ? "#F8E2FD" : "transparent" }}>
                  <MaterialIcons
                    name={options.tabBarIcon}
                    size={34}
                    color={isFocused ? '#8F2ABD' : '#535353'}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

// Estilos da TabBar
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red', // Cor de fundo da barra (pode ser alterada)
  },
  content: {
    marginBottom: Platform.OS === 'ios' ? 38 : 24, // Ajuste para iOS/Android
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.9)', // Fundo translúcido
    flexDirection: 'row',
    borderRadius: 99,
    gap: 8,
    elevation: 10, // Sombra Android
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.80, // Sombra iOS
  },
  buttonTab: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})