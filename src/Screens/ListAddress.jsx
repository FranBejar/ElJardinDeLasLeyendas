import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { useSelector } from "react-redux"
import AddButton from '../Components/AddButton'
import AddressItem from '../Components/AddressItem'
import { useGetUserLocationQuery } from "../Services/shopServices"
import { colors } from "../Global/Colors"

const ListAddress = ({navigation}) => {
    const {location, localId} = useSelector((state) => state.userReducer.value)
    const {data: userLocationQuery} = useGetUserLocationQuery(localId)

    return location?.latitude || userLocationQuery ? (
        <AddressItem 
            location={location?.latitude ? location : userLocationQuery} 
            navigation={navigation} 
        />
    ):(
        <View style = {styles.container}>
            <Text style = {styles.text}>Sin Localizacion</Text>
            <AddButton 
                additionalStyle={styles.btn}
                title="Seleccionar Localizacion"
                onPress={()=> navigation.navigate('Location Selector')}
            />
        </View>
    )
}

export default ListAddress

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "flex-start",
        backgroundColor: colors.clearViolet,
        height: '100%'
    },
    btn: {
        height: '12%',
    },
    text: {
        fontFamily: 'DancingScript-Bold',
        fontSize: 24
    }
})