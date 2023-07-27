import Header from '../Components/Header';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderScreen from '../Screens/OrderScreen';

const Stack = createNativeStackNavigator()

const OrderStack = () => {
  return (
        <Stack.Navigator
        initialRouteName='OrderScreen'
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
            name='OrderScreen'
            component={OrderScreen}
        />
    </Stack.Navigator>
  )
}

export default OrderStack