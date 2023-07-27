import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderData from '../Data/orders.json'
import OrderItem from '../Components/OrderItem'
import { colors } from '../Global/Colors'

const OrderScreen = () => {
  return (
    <View style={styles.orderContainer}>
      <FlatList 
        data={OrderData}
        keyExtractor={orderItem => orderItem.id}
        renderItem={({item}) => {
            return(
                <OrderItem
                    order={item}
                />
            )
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