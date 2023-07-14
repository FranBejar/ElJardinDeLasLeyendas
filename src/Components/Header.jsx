import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Header = () => {
  return (
    <View 
        style={styles.containerHeader}>
      <Text style ={styles.text}>El Jardin de las Leyendas</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        height: '10%',
        paddingTop: '5%',
        backgroundColor: colors.violet,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontFamily: 'DancingScript',
        color: 'white'
    }
})