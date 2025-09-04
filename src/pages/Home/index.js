import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from 'react-native-safe-area-context';

import Product from "../../components/Product";
import { CartContext } from "../../contexts/CartContext";

export default function Home() {
    const navigation = useNavigation();
    const { cart, addItemCart } = useContext(CartContext);
    const [products] = useState([
        { id: 1, name: "Coca-cola", price: 19.90 },
        { id: 2, name: "Chocolate", price: 6.50 },
        { id: 3, name: "Queijo 500g", price: 15 },
        { id: 4, name: "Batata frita", price: 23.90 },
        { id: 5, name: "Guaraná lata", price: 6.00 }
    ]);

    function handleAddCart(item) {
        addItemCart(item);
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header animado */}
            <Animatable.View animation="fadeInDown" delay={100} style={styles.cartContent}>
                <Text style={styles.title}>🛒 Lista de Produtos</Text>

                <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
                    {cart?.length > 0 && (
                        <View style={styles.dot}>
                            <Text style={styles.dotText}>{cart?.length}</Text>
                        </View>
                    )}
                    <Feather name="shopping-cart" size={30} color={'#168888'} />
                </TouchableOpacity>
            </Animatable.View>

            {/* Lista de produtos */}
            <FlatList
                style={styles.list}
                data={products}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item, index }) => (
                    <Animatable.View animation="fadeInUp" delay={index * 120}>
                        <Product data={item} addToCart={() => handleAddCart(item)} />
                    </Animatable.View>
                )}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        paddingEnd: 14,
        paddingStart: 14
    },
    cartContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 24,
        marginBottom: 24,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#111",
    },
    cartButton: {
        position: "relative",
    },
    dot: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ff4757",
        width: 22,
        height: 22,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 99,
        top: -6,
        right: -6,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 4,
    },
    dotText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#fff",
    },
    list: {
        flex: 1
    }
});
