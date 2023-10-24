import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import Configuration from './src/screens/Configuration'
import BackgroundImageSelector from './src/screens/BackgroundImageSelector'
import UrlPlayer from './src/screens/UrlPlayer'
import About from './src/screens/About'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          orientation: 'portrait',
          headerShown: false,
          animation: 'none', 
        }}>        
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="Configuration" component={Configuration} />
        <Stack.Screen name="BackgroundImageSelector" component={BackgroundImageSelector} />
        <Stack.Screen name="UrlPlayer" component={UrlPlayer} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

