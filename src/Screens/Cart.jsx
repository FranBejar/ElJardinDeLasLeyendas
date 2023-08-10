import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../Components/CartItem'
import { colors } from '../Global/Colors'
import { useSelector } from 'react-redux'
import { usePostCartMutation } from '../Services/shopServices'

const Cart = () => {

  const {items: CartData, total, updatedAt, user} = useSelector(state => state.cartReducer.value)
  const [triggerPostCart, result] = usePostCartMutation()

  const onConfirm = () => {
    triggerPostCart({items: CartData, total, user, updatedAt})
  }

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={CartData}
        keyExtractor={cartItem => cartItem.id}
        renderItem={({item})=> {
          return (
            <CartItem
                cartItem={item}
            />
          )
        }}
      />
      <View style={styles.totalContainer}>
        <Pressable
          onPress={onConfirm}
        >
          <Text style={styles.btnConfirm}>Confirmar</Text>
        </Pressable>
        <Text style={styles.textConfirm}>Total: ${total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: colors.clearViolet,
    height: "100%",
    alignItems: 'center'
  },
  totalContainer: {
    flexDirection: 'row',
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    gap: 25
  },
  btnConfirm: {
    backgroundColor: colors.violet,
    borderRadius: 20,
    borderBottomWidth: 3.5,
    borderRightWidth: 3.5,
    borderColor: colors.deepViolet,
    fontFamily: "DancingScript",
    fontSize: 23,
    color: "white",
    paddingLeft: 25,
    paddingRight: 25
  },
  textConfirm: {
    backgroundColor: colors.borderViolet,
    borderRadius: 25,
    fontFamily: "DancingScript",
    fontSize: 20,
    color: "white",
    paddingLeft: 25,
    paddingRight: 25
  }
})