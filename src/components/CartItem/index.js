import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from "react-native-animatable";

export default function CartItem({ data, addAmount, removeAmount }) {
    const [amount, setAmount] = useState(data?.amount);

    function handleIncrease() {
        addAmount();
        setAmount((item) => item + 1);
    }

    function handleDecrease() {
        removeAmount();
        if (amount === 0) {
            setAmount(0);
            return;
        }
        setAmount(item => item - 1);
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.price}>
                    R$ {data.price.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </Text>
            </View>

            <View style={styles.amountContainer}>
                <TouchableOpacity style={styles.buttonRemove} onPress={handleDecrease}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>

                <Animatable.Text
                    animation="pulse"
                    iterationCount="infinite"
                    iterationDelay={3000}
                    style={styles.amount}>
                    {amount}
                </Animatable.Text>

                <TouchableOpacity style={styles.buttonAdd} onPress={handleIncrease}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 12,
        marginBottom: 16,
        padding: 14,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 2,
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
        color: "#222",
    },
    price: {
        fontSize: 14,
        marginTop: 4,
        color: "#168888",
        fontWeight: "500"
    },
    amountContainer: {
        marginTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-end"
    },
    buttonAdd: {
        backgroundColor: '#168888',
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 30,
        marginLeft: 10,
        shadowColor: "#168888",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 3,
    },
    buttonRemove: {
        backgroundColor: '#ff4757',
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 30,
        marginRight: 10,
        shadowColor: "#ff4757",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 3,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
    amount: {
        fontSize: 16,
        fontWeight: "600",
        marginHorizontal: 6,
        color: "#111",
    }
});
