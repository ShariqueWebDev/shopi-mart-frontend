import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { Context } from "../../../utils/context";
import { useContext } from "react";

const CartItem = () => {
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context)
    return (
        <div className="cart-products">
            {cartItems.map((item) => {
                return <div key={item.id} className="cart-product">
                    <div className="img-container">
                        <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                            <span className="names">{item.attributes.title}</span>
                            <MdClose onClick={() => {
                                handleRemoveFromCart(item);
                                console.log("product removed");
                            }} />
                        </div>
                        <div className="quantity-button">
                            <span onClick={() => { handleCartProductQuantity('dec', item) }}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={() => { handleCartProductQuantity('inc', item) }}>+</span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity}</span>
                            <span>X</span>
                            <span className="price-highlight">&#8377; {item.attributes.quantity * item.attributes.price}</span>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
};

export default CartItem;
