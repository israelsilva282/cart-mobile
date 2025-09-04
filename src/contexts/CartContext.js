import { createContext, useState } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addItemCart(newItem) {
        //Verifica se o item já está no carrinho
        const indexItem = cart.findIndex(item => item.id === newItem.id);

        if (indexItem !== -1) {
            let cartList = cart;
            cartList[indexItem].amount += 1;

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList)

            console.log([...cart, data])
            return;
        }

        let data = { ...newItem, amount: 1, total: newItem.price }

        setCart(products => [...products, data])
    }

    return (
        <CartContext.Provider value={{ cart, addItemCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;