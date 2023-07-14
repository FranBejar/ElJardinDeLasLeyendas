import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Card = ({children, additionalStyle = []}) => {
  return (
    <View style = {[styles.cardContainer, additionalStyle]}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        height: 50,
        width: 300,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
        borderBottomWidth: 3.5,
        borderRightWidth: 3.5,
        borderColor: colors.borderViolet,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.deepViolet,
        marginVertical: 10,
        borderRadius: 8,
    }
})