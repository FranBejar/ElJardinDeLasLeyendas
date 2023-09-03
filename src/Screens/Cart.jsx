import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CartItem from '../Components/CartItem'
import { colors } from '../Global/Colors'
import { useSelector, useDispatch } from 'react-redux'
import { usePostCartMutation } from '../Services/shopServices'
import { setUserCart } from '../Features/Cart/cartSlice'
import { useGetOrdersQuery } from '../Services/shopServices'
import { removeAllCartItems } from '../Features/Cart/cartSlice'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

const Cart = () => {

  const {items: CartData, total, updatedAt} = useSelector(state => state.cartReducer.value)
  const user = useSelector(state => state.cartReducer.value.user)
  const dispatch = useDispatch()
  const [triggerPostCart, result] = usePostCartMutation()
  const {data: orders, refetch} = useGetOrdersQuery(user)

  useEffect(() => {
    if (result.isSuccess) {
      refetch()
      dispatch(setUserCart(user))
      dispatch(removeAllCartItems())
    }
  }, [result.isSuccess, dispatch, user, refetch])
  
  const onConfirm = () => {
    const order = { items: CartData, total, user, updatedAt }
    triggerPostCart(order)
    Toast.show({
      type: "success",
      text1: "Se ha creado tu pedido exitosamente",
      autoHide: true,
      visibilityTime: 3000,
      position: "top"
    })
  }

  return (
    <View style={styles.cartContainer}>
      <Toast/>
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