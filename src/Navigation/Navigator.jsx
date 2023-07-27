import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform} from 'react-native'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import OrderStack from './OrderStack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../Global/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <SafeAreaView style = {styles.container}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name='Shop'
          component={ShopStack}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <FontAwesome name="book" size={27} color={focused ? "white" : colors.logoViolet} />
                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name='Cart'
          component={CartStack}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <MaterialIcons name="shopping-cart" size={27} color={focused ? "white" : colors.logoViolet} />
                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name='Orders'
          component={OrderStack}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <FontAwesome name="list" size={27} color={focused ? "white" : colors.logoViolet} />
                </View>
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    tabBar: {
      backgroundColor: colors.violet,
      height: 50
    }
  })