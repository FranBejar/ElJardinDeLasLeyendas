import Header from '../Components/Header';
import Home from '../Screens/Home';
import ItemListCategory from '../Screens/ItemListCategory';
import ItemDetail from '../Screens/ItemDetail';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const ShopStack = () => {
  return (
        <Stack.Navigator
        initialRouteName='Home'
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
            name='Home'
            component={Home}
        />
        <Stack.Screen
            name='ItemListCategory'
            component={ItemListCategory}
        />
        <Stack.Screen
            name='ItemDetail'
            component={ItemDetail}
        />
    </Stack.Navigator>
  )
}

export default ShopStack