import React, {useState} from "react"
import { Image, View, StyleSheet, Text } from "react-native"
import * as ImagePicker from "expo-image-picker"
import AddButton from "../Components/AddButton"
import { colors } from "../Global/Colors"
import * as MediaLibrary from "expo-media-library"
import { usePostProfileImageMutation } from "../Services/shopServices"
import { useDispatch, useSelector } from "react-redux"
import { saveImage } from "../Features/User/userSlice"

const ImageSelector = ({navigation}) => {
    const [image, setImage] = useState(null);

    const dispatch = useDispatch()

    const [triggerSaveImage, resultSaveImage] = usePostProfileImageMutation()
    const {localId} = useSelector((state) => state.userReducer.value)

    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted){
            return false
        }
        return true
    }

    const pickImage = async ()=> {
        const isCameraOk = await verifyCameraPermissions()
        if (isCameraOk){
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowEditing: true,
                aspect: [1,1],
                quality: 1
            })

            if(!result.canceled){
                setImage(result.assets[0].uri)
            }
        }
    }

    const confirmImage = async ()=> {
        try{
            const {status} = await MediaLibrary.requestPermissionsAsync()
            if(status === "granted"){
                const response = await MediaLibrary.createAssetAsync(image)
                triggerSaveImage({
                    image: response.uri,
                    localId: localId
                })
                dispatch(saveImage(response.uri))
            }
        } catch(error) {
            console.log(error)
        }
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            {image ? (
                <>
                    <Image source={{uri:image}} style={styles.image}/>
                    <AddButton title="Sacar otra foto" onPress={pickImage}/>
                    <AddButton title="Confirmar foto" onPress={confirmImage}/>
                </>
            ):(
                <>
                    <View style={styles.noPhotoContainer}>
                        <Text>No hay Imagen</Text>
                    </View>
                    <AddButton title="Sacar foto" onPress={pickImage}/>
                </>
            )}
        </View>
    )
}

export default ImageSelector;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        backgroundColor: colors.clearViolet,
        height: "100%"
    },
    image: {
        width: 200,
        height: 200
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        marginTop: 20,
        borderWidth: 2,
        borderColor: colors.borderViolet,
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})