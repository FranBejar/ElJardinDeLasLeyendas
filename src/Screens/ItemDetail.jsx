import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../Data/products.json'
import Card from '../Components/Card'
import { colors } from '../Global/Colors'

const ItemDetail = ({
  navigation,
  route
}) => {

  const {productId: idSelected} = route.params

  const [product, setProduct] = useState(null)

  useEffect(()=>{
      const productSelected = allProducts.find(product => product.id === idSelected)
      setProduct(productSelected || {})
  },[idSelected])

  return (
    <View style={styles.prodContainer}>
      
      {product ?
      <Card additionalStyle={styles.product}>
        <Text style={styles.textTitle}>{product.title}</Text>
        {product.images && product.images[0] && (
          <Image 
            resizeMode='cover'
            style={styles.image}
            source={{uri: product.images[0]}}
          />
        )}
        <Text style={styles.text}>Autor: {product.author}</Text>
        <Text style={styles.text}>ISBN: {product.isbn}</Text>
        <Text style={styles.text}>Precio: ${product.price}</Text>
        <Pressable>
          <Card additionalStyle={styles.btnCart}>
            <Text style={styles.textBtn}>Agregar al Carrito</Text>
          </Card>
      </Pressable>
      </Card> : null}
      <Pressable onPress={()=> navigation.goBack()}>
        <Card additionalStyle={styles.btnBack}>
          <Text style={styles.textBtn}>Volver</Text>
        </Card>
      </Pressable>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  prodContainer: {
    alignItems: 'center',
    backgroundColor: colors.clearViolet,
    flexDirection: 'column',
    height: '100%'
  },
  product: {
    flexDirection: 'column',
    justifyContent:'center',
    width: '90%',
    height: '80%'
  },
  image: {
    height: '60%',
    width: 220,
    borderRadius: 10
  },
  btnBack: {
    borderRadius: 100
  },
  textBtn: {
    fontSize: 20,
    fontFamily: 'DancingScript',
    color: 'white'
  },
  textTitle: {
    fontSize: 32,
    fontFamily: 'DancingScript-Bold',
    color: 'white',
    textAlign: 'center'
  },
  text: {
    fontSize: 18,
    fontFamily: 'DancingScript',
    color: 'white'
  },
  btnCart: {
    borderRadius: 100,
    backgroundColor: colors.violet
  }
})