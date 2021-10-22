import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Splash,Calculator} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Calculator" component={Calculator} options={{headerShown: false}} />
    </Stack.Navigator>
    )
}

export default Router
