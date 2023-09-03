import { Image, StyleSheet, View } from "react-native"
import React from "react"
import { colors } from "../Global/Colors"
import AddButton from "../Components/AddButton"
import { useDispatch, useSelector } from "react-redux"
import { useGetProfileImageQuery } from "../Services/shopServices"
import { signOut } from "../Features/User/userSlice"
import { deleteSession } from "../SQLite"
import { Toast } from "react-native-toast-message/lib/src/Toast"

const MyProfile = ({navigation}) => {
    
    const dispatch = useDispatch()

    const {localId, profileImage} = useSelector(state => state.userReducer.value)

    const {data: image} = useGetProfileImageQuery(localId)

    const cameraImage = image?.image

    const launchCamera = async ()=>{
        navigation.navigate('Image Selector')
    }

    const launchLocation = async ()=>{
        navigation.navigate('List Address')
    }

    const logout = async ()=> {
        try {
            const response = await deleteSession(localId)
            dispatch(signOut())
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Hubo un error",
                autoHide: true,
                visibilityTime: 3000
            })
        }
    }

    return (
        <View style={styles.container}>
            <Toast/>
            {profileImage || cameraImage ? (
                <Image
                    source={{uri: profileImage || cameraImage}}
                    style={styles.image}
                    resizeMode="cover"
                />
            ):(
                <Image
                    source={require("../Assets/Images/defaultProfile.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <AddButton onPress={launchCamera} title="Cambiar Foto de Perfil"/>
            <AddButton onPress={launchLocation} title="Seleccionar Ubicacion"/>
            <AddButton onPress={()=> {logout()}} title="Cerrar Sesion"/>
        </View>
    )
}

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: colors.clearViolet,
        height: '100%'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: colors.borderViolet
    }
})