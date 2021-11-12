import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Splash, Segitiga, Persegi, Lingkaran, Grade} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Segitiga" component={Segitiga} options={{headerShown: false}} />
      <Stack.Screen name="Persegi" component={Persegi} options={{headerShown: false}} />
      <Stack.Screen name="Lingkaran" component={Lingkaran} options={{headerShown: false}} />
      <Stack.Screen name="Grade" component={Grade} options={{headerShown: false}} />
    </Stack.Navigator>
    )
}

export default Router
