import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";

const AddButton = ({
    title = "",
    onPress = () => {}
}) => {
    return (
        <Pressable
            style={{ ...styles.button}}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: '75%',
        height: '7.5%',
        alignItems: "center",
        backgroundColor: colors.borderViolet,
        borderRadius: 20,
        borderBottomWidth: 3.5,
        borderRightWidth: 3.5,
        borderColor: colors.deepViolet,
        fontFamily: "DancingScript",
        color: "white",
        paddingLeft: 25,
        paddingRight: 25
    },
    text: {
        fontFamily: "DancingScript-Bold",
        fontSize: 23,
        color: 'white',
    },
});