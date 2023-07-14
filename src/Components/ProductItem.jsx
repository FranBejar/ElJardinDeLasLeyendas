import { Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({item}) => {
  return (
    <Card
      additionalStyle={styles.additionalStylesCard}
    >
        <Image 
          resizeMode='cover'
          style = {styles.image}
          source={{uri: item.images[0]}}
        />
        <Text style={styles.textCategory}>{item.title}</Text>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 125,
    width: 125,
    borderRadius: 8
  },
  additionalStylesCard: {
    flexDirection: 'row',
    height: 150,
    paddingHorizontal: 10
  },
  textCategory:{
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'DancingScript',
    color: 'white',
    textAlign: 'center'
  }
})