import { StyleSheet, Text, View } from "react-native";

export default function Cart() {
    return <View style={styles.container}>
        <Text>Pagina Carrinho</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});