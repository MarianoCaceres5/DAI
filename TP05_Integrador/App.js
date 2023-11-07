import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmergenciaScreen from './src/screens/EmergenciaScreen'
import ConfiguracionScreen from './src/screens/ConfiguracionScreen'
import CambioFondoScreen from './src/screens/CambioFondoScreen'
import MultimediaScreen from './src/screens/MultimediaScreen'
import AcercaDeScreen from './src/screens/AcercaDeScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ConfiguracionScreen"
        screenOptions={{
          orientation: 'portrait',
          headerShown: false,
          animation: 'none', 
        }}>        
        <Stack.Screen
          name="EmergenciaScreen"
          component={EmergenciaScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="ConfiguracionScreen" component={ConfiguracionScreen} />
        <Stack.Screen name="CambioFondoScreen" component={CambioFondoScreen} />
        <Stack.Screen name="MultimediaScreen" component={MultimediaScreen} />
        <Stack.Screen name="AcercaDeScreen" component={AcercaDeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

