import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import OrderItem from '../Components/OrderItem'
import { colors } from '../Global/Colors'
import { useGetOrdersQuery } from '../Services/shopServices'
import { useSelector } from 'react-redux'

const OrderScreen = () => {

  const email = useSelector(state => state.userReducer.value.email);
  const { data: orders } = useGetOrdersQuery(email);

  return (
    <View style={styles.orderContainer}>
      <FlatList 
        data={orders}
        keyExtractor={(orderItem, index) => `${orderItem.createdAt}-${index}`}
        renderItem={({ item }) => {
          return (
            <OrderItem
              order={item}
            />
          );
        }}
      />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    orderContainer: {
        backgroundColor: colors.clearViolet,
        height: "100%",
        alignItems: 'center'
      },
})