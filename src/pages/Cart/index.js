import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CartItem from "../../components/CartItem";
import { CartContext } from "../../contexts/CartContext";

export default function Cart() {
    const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);

    return (<View style={styles.container}>
        <FlatList
            data={cart}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            ListFooterComponent={<Text style={styles.total}>Total: {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })} </Text>}
            renderItem={({ item }) =>
                <CartItem
                    data={item}
                    addAmount={() => addItemCart(item)}
                    removeAmount={() => removeItemCart(item)} />}
        />
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14,
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 24
    }
});