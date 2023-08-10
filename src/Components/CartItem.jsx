import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../Features/Cart/cartSlice";

const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch()

    const onRemoveCartItem = () => {
        dispatch(removeCartItem(cartItem.id))
    }

    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title}</Text>
                <Text style={styles.text2}>Cantidad: {cartItem.quantity}</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>
            <Pressable onPress={onRemoveCartItem}>
                <Entypo name="trash" size={30} color="white" />
            </Pressable>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        width: 350,
        height: 120,
        backgroundColor: colors.deepViolet,
        padding: 10,
        margin: 10,
        borderBottomWidth: 3.5,
        borderRightWidth: 3.5,
        borderColor: colors.borderViolet,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "85%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "DancingScript",
        fontSize: 25,
        color: "white",
    },
    text2: {
        fontFamily: "DancingScript",
        fontSize: 15,
        color: "white",
    },
});