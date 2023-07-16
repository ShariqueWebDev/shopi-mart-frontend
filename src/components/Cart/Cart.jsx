import "./Cart.scss";
import CartItem from './CartItem/CartItem'
import { MdClose, MdOutlineDoneAll } from 'react-icons/md'
import { BsCartX } from 'react-icons/bs'
import { Context } from "../../utils/context";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { makePaymentRequest } from '../../utils/api'

const Cart = ({ setShowCart }) => {

    const { cartItems, cartSubTotal, setAlert, handleAlert } = useContext(Context)
    const navigate = useNavigate();

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

    const handlePayment = async () => {
        handleAlert("You have Checkout", (<MdOutlineDoneAll />))
        setTimeout(() => {
            setAlert(false)
        }, 1000);
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders", {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div >
            <div className="cart-panel">
                <div className="opac-layer" onClick={() => { setShowCart(false) }}></div>
                <div className="cart-content">
                    <div className="up">
                        <div className="cart-header">
                            <span className="heading">Shopping Cart</span>
                            <span className="cart-close" onClick={() => { setShowCart(false) }} >
                                <MdClose />
                                <span>close</span>
                            </span>
                        </div>
                        <div className="boder-line"></div>
                        {!cartItems.length && <div className="cart-empty">
                            <BsCartX />
                            <span>No product in the Cart</span>
                            <button className="return-cta" onClick={() => { navigate("/"); setShowCart(false) }}>BACK TO SHOP</button>
                        </div>}
                    </div>
                    {!!cartItems?.length && <><CartItem />
                        <div className="blank-container"></div>
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal :</span>
                                <span className="text total">&#8377;{cartSubTotal}</span>
                            </div>
                            <div className="button">
                                <button className="checkout-cta" onClick={handlePayment} >Checkout</button>
                            </div>
                        </div> </>}
                </div>
            </div>
        </div>
    )

};

export default Cart;
