import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { colors } from "../Global/Colors";

const OrderItem = ({ order }) => {
    const total = order.items.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
        0
    );

    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {new Date(order.createdAt).toLocaleString()}
                </Text>
                <Text style={styles.text2}>${total}</Text>
            </View>
            <Feather name="search" size={30} color="white" />
        </View>
    );
};

export default OrderItem;

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
        fontSize: 20,
        color: "white",
    },
    text2: {
        fontFamily: "DancingScript",
        fontSize: 15,
        color: "white",
    },
});