import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import CategoryItem from '../Components/CategoryItem'
import { useGetCategoriesQuery } from '../Services/shopServices'

const Home = ({
  navigation
}) => {

  const {data: categories} = useGetCategoriesQuery()

  return (
    <View style={styles.container}>
        <FlatList
            data = {categories}
            keyExtractor={category => category}
            renderItem={({item}) => <CategoryItem item = {item} navigation={navigation}/>}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.clearViolet,
        alignItems: 'center'
    }
})