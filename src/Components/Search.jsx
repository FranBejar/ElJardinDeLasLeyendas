import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../Global/Colors';
import { AntDesign } from '@expo/vector-icons';

const Search = ({
    onSearch,
    error = "",
    goBack
}) => {
    const [keyword, setKeyword] = useState("")
    const {width, height}  = useWindowDimensions()

  return (
    <View style ={width>250 ?  styles.container : styles.containerSm}>
        <TextInput style ={styles.input} 
            placeholder='Buscar'
            value={keyword}
            onChangeText={setKeyword}
        />
        <View style={width>250 ?  styles.pressable : styles.pressableSm}>
            <Pressable onPress={()=>onSearch(keyword)}>
                <FontAwesome name="search" size={24} color={colors.deepViolet}/>
            </Pressable>
            <Pressable onPress={()=> setKeyword("")}>
                <FontAwesome5 name="eraser" size={24} color={colors.deepViolet}/>
            </Pressable>
            <Pressable onPress={goBack}>
                <AntDesign name="back" size={24} color={colors.deepViolet}/>
            </Pressable>
        </View>
       { error ?
         <Text>
            {error}
        </Text>
        : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        gap: 10,
    },
    pressable: {
        flexDirection: 'row',
        gap: 10
    },
    pressableSm: {
        flexDirection: 'row',
        gap: 10,
        paddingTop: 12
    },
    containerSm: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20%'
    },
    input: {
        width: 250,
        padding: 8,
        fontSize: 18,
        backgroundColor: colors.lightViolet,
        borderRadius: 10,
        borderColor: colors.violet,
        borderWidth: 1
    }
})