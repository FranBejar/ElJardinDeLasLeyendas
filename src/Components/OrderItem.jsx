import { StyleSheet, Text, View } from "react-native";
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
                    {order.updatedAt}
                </Text>
                <View>
                    {order.items.map((item) => (
                        <View key={item.id} style={styles.itemContainer}>
                            <Text style={styles.text2}>{item.author}</Text>
                            <Text style={styles.text2}>{item.title}</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.text2}>${total}</Text>
            </View>
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    card: {
        width: 350,
        backgroundColor: colors.deepViolet,
        padding: 10,
        margin: 10,
        borderBottomWidth: 3.5,
        borderRightWidth: 3.5,
        borderColor: colors.borderViolet,
        borderRadius: 8,
        alignItems: "center",
    },
    textContainer: {
        width: "85%",
        alignItems: "center",
    },
    text: {
        fontFamily: "DancingScript",
        fontSize: 20,
        color: "white",
    },
    text2: {
        fontFamily: "DancingScript",
        fontSize: 18,
        color: "white",
    },
    itemContainer: {
        alignItems: "center",
        marginTop: 5,
        marginBottom: 5
    },
});
