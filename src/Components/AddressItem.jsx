import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { colors } from "../Global/Colors";

const AddressItem = ({ location, navigation }) => {

    const onChangeLocation = () => {
        navigation.navigate('Location Selector')
    }

    return (
        <View style={styles.back}>
            <View style={styles.locationCard} onPress={() => {}}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {location.address}
                    </Text>
                </View>
                <Pressable style={styles.logo} onPress={onChangeLocation}>
                    <Entypo name="location" size={25} color={colors.clearViolet}/>
                    <Text style={styles.text}>Cambiar</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default AddressItem;

const styles = StyleSheet.create({
    back:{
        backgroundColor: colors.clearViolet,
        height: '100%'
    },
    locationCard: {
        height: 125,
        backgroundColor: colors.deepViolet,
        padding: 15,
        margin: 10,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderColor: colors.borderViolet,
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textContainer: {
        width: "75%",
        flexDirection: "column"
    },
    text: {
        fontFamily: "DancingScript-Bold",
        fontSize: 18,
        color: "white",
        textAlign: "center"
    },
    logo: {
        alignItems: "center"
    }
});