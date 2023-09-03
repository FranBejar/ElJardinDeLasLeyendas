import { FlatList, StyleSheet, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../Services/shopServices'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

const ItemListCategory = ({
  navigation,
  route
}) => {

  const {category} = route.params

  const categorySelected = useSelector(state => state.shopReducer.value.categorySelected)

  const {data: productsSelected, isError, isLoading} = useGetProductsByCategoryQuery(categorySelected)

  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(()=> {

    if(productsSelected){
      const productsFiltered = productsSelected.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
      setProducts(productsFiltered)
    }

  }, [productsSelected, keyword])

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/
    const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      Toast.show({
        type: "error",
        text1: "Solo letras y numeros",
        autoHide: true,
        visibilityTime: 3000
      })
      setKeywordError("Solo letras y números")
    }

  }  

  return (
    <View style={styles.container}>
        <Toast/>
        <Search
          onSearch={onSearch}
          error={keywordError}
          goBack={()=> navigation.goBack()}
        />
        <Text style={styles.text}>{category}</Text>
        <FlatList
            data = {products}
            keyExtractor={product => product.id}
            renderItem={({item}) => <ProductItem 
              item={item}
              navigation={navigation}
            />}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.clearViolet,
        alignItems: 'center'
    },
    text: {
      fontSize: 28,
      fontFamily: 'DancingScript-Bold',
      color: 'black'
  }
})