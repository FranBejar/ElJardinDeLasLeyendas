import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native'
import Header from '../Components/Header';
import Home from '../Screens/Home';
import ItemListCategory from '../Screens/ItemListCategory';
import { useState } from 'react';
import ItemDetail from '../Screens/ItemDetail';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <SafeAreaView style = {styles.container}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
          ({route}) => (
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
    </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
  })