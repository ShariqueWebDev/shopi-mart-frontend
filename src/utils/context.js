import { createContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const location = useLocation();
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    const handleAlert = (message, imgType) => {
        setAlert({
            msg: message,
            img: imgType,
        })
    }

    useEffect(() => {
        let count = 0;
        cartItems.map((item) => {
            return count += item.attributes.quantity
        })
        setCartCount(count)

        let subTotal = 0;
        cartItems.map((item) => {
            return subTotal += item.attributes.quantity * item.attributes.price
        });
        setCartSubTotal(subTotal);

    }, [cartItems])

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);
        if (index !== -1) {
            items[index].attributes.quantity = + quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product]
        }
        setCartItems(items)
    };

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter((p) => p.id !== product.id);
        setCartItems(items)
    }

    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id)
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) {
                return;
            }
            items[index].attributes.quantity -= 1;
        };
        setCartItems(items);
    };

    return <Context.Provider value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartSubTotal,
        setCartSubTotal,
        cartCount,
        setCartCount,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
        alert,
        setAlert,
        handleAlert
    }}>
        {children}
    </Context.Provider>
}

export default AppContext;