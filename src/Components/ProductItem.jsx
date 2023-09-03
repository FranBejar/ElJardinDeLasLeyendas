import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux';
import { setIdSelected } from '../Features/Shop/shopSlice';

const ProductItem = ({
  item,
  navigation
}) => {

  const {width} = useWindowDimensions();

  const dispatch = useDispatch()

  const onSelect = (id) => {
    dispatch(setIdSelected(id))
    navigation.navigate('ItemDetail', {productId: item.id})
  }

  return (
    <Pressable onPress={()=> onSelect(item.id)}>
      <Card
        additionalStyle={width>250 ? styles.additionalStylesCard : styles.additionalStylesCardSm}
      >
          <Image 
            resizeMode='cover'
            style = {width>250 ? styles.image : styles.imageSm}
            source={{uri: item.images[0]}}
          />
          <Text style={styles.textCategory}>{item.title}</Text>
      </Card>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: '90%',
    width: '30%',
    minWidth: 80,
    maxWidth: 200,
    maxHeight: 200,
    borderRadius: 8
  },
  imageSm: {
    height: '90%',
    width: '90%',
    minWidth: 80,
    maxWidth: 150,
    maxHeight: 250,
    borderRadius: 8
  },
  additionalStylesCard: {
    flexDirection: 'row',
    height: 150,
    paddingHorizontal: 10
  },
  additionalStylesCardSm: {
    flexDirection: 'column',
    height: 300,
    paddingHorizontal: 10
  },
  textCategory:{
    flex: 1,
    marginLeft: 10,
    fontSize: 23,
    fontFamily: 'DancingScript',
    color: 'white',
    textAlign: 'center'
  }
})