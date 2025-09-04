import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import CartItem from "../../components/CartItem";
import { CartContext } from "../../contexts/CartContext";

export default function Cart() {
    const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item, index }) => (
                    <Animatable.View animation="fadeInUp" delay={index * 120}>
                        <CartItem
                            data={item}
                            addAmount={() => addItemCart(item)}
                            removeAmount={() => removeItemCart(item)}
                        />
                    </Animatable.View>
                )}
                ListFooterComponent={
                    <Animatable.View animation="fadeInUp" delay={300} style={styles.footer}>
                        <Text style={styles.totalLabel}>Total:</Text>
                        <Text style={styles.totalValue}>
                            {total?.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        </Text>
                    </Animatable.View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14,
    },
    footer: {
        marginTop: 20,
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: "600",
        color: "#444",
    },
    totalValue: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#168888",
    }
});
