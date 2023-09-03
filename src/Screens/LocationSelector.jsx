import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import AddButton from "../Components/AddButton";
import { usePostUserLocationMutation } from "../Services/shopServices";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../Features/User/userSlice";
import { colors } from "../Global/Colors";
import MapPreview from "../Components/MapPreview";
import { google_maps_api_key } from "../Database/firebaseConfig";

const LocationSelector = ({ navigation }) => {

    const [location, setLocation] = useState({ latitude: "", longitude: "" });
    const [error, setError] = useState("");

    const [address, setAddress] = useState("");

    const [triggerPostUserLocation] = usePostUserLocationMutation()
    const {localId} = useSelector(state => state.userReducer.value)
    const dispatch = useDispatch()

    const onConfirmAddress = () => {

        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address
        }

        dispatch(setUserLocation(
            locationFormatted
        ))

        triggerPostUserLocation({
            location: locationFormatted,
            localId
        })

        navigation.goBack()
    }

    useEffect(() => {
        (async () => {
            try{
                let {status} = await Location.requestForegroundPermissionsAsync()
                if(status !== "granted"){
                    setError("No dio permiso para usar la localizacion")
                    return;
                }

                let location = await Location.getCurrentPositionAsync({})
                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                })
            } catch (error) {
                setError(error.message)
            }
        })();
    },[])

    useEffect(() => {
        (async ()=> {
            try{
                if(location.latitude){
                    const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${google_maps_api_key}`
                    const response = await fetch(url_reverse_geocode)
                    const data = await response.json()
                    console.dir(data)
                    setAddress(data.results[0].formatted_address)
                }
            }catch(error){
                setError(error.message)
            }
        })();
    }, [location])

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Direcciones</Text>
            {location?(
                <>
                    <View style={styles.noLocationContainer}>
                        <Text>Latitud: {location.latitude};</Text>
                        <Text>Longitud: {location.longitude}</Text>
                    </View>
                    <MapPreview location={location}/>
                    <Text>
                        Direccion: {address}
                    </Text>
                    <AddButton
                        onPress={onConfirmAddress}
                        title="Confirmar Direccion"
                    />
                </>
            ):(
                <>
                    <View style={styles.noLocationContainer}>
                        <Text>{error}</Text>
                    </View>
                </>
            )}
        </View>
    )
}

export default LocationSelector

const styles = StyleSheet.create({
    container:{
        padding: 10,
        gap: 10,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: colors.clearViolet,
        height: '100%'
    },
    noLocationContainer:{
        borderWidth: 2,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: colors.lightViolet,
        borderColor: colors.borderViolet,
        padding: 10,
        gap:10,
        width: '75%'
    },
    text: {
        fontFamily: 'DancingScript-Bold',
        fontSize: 24
    }
})