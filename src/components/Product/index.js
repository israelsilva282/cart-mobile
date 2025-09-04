import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Product({ data, addToCart }) {
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

            {/* Botão com animação */}
            <Animatable.View animation="pulse" iterationCount="infinite" iterationDelay={2500}>
                <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </Animatable.View>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
        color: "#222",
    },
    price: {
        marginTop: 4,
        fontSize: 14,
        color: "#168888",
        fontWeight: "500"
    },
    buttonAdd: {
        paddingHorizontal: 14,
        backgroundColor: "#168888",
        paddingVertical: 8,
        borderRadius: 30,
        shadowColor: "#168888",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 5,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18
    }
});
