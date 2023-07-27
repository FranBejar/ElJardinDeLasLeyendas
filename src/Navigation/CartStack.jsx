import Header from '../Components/Header';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../Screens/Cart';

const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
        <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={
        () => (
            {
            header: () => {
                return <Header/>
            }
            }
        )
        }
    >
        <Stack.Screen
            name='CartScreen'
            component={Cart}
        />
    </Stack.Navigator>
  )
}

export default CartStack