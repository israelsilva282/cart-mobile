import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../Cart";
import Home from "../Home";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={
                { headerShown: false }
            } />
            <Stack.Screen name="Cart" component={Cart} options={{
                headerTitle: "Meu Carrinho"
            }} />
        </Stack.Navigator>
    )
}