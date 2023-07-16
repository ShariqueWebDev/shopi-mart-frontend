import "./SingleProduct.scss";
import RelatedProduct from './RelatedProducts/RelatedProducts'

import {
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus
} from 'react-icons/fa'

import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";
import { MdOutlineDoneAll } from 'react-icons/md'
const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1)
    const { handleAddToCart, handleAlert, setAlert, cartItems } = useContext(Context);
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

    const navigate = useNavigate();
    if (!data) {
        return;
    }

    const product = data.data[0].attributes;
    const navigation = product.categories.data[0].id

    const increament = () => {
        setQuantity((prevState) => prevState + 1)
    }

    const decreament = () => {
        setQuantity((prevState) => {
            if (prevState === 1) {
                return 1;
            }
            return prevState - 1;
        })
    }

    const existingProduct = () => {
        if (cartItems) {
            handleAlert("Product Added to Cart", (<MdOutlineDoneAll />))
            setTimeout(() => {
                setAlert(false)
            }, 2000)
        }
    }

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">&#8377; {product.price} </span>
                        <span className="desc">{product.desc}</span>
                        <div className="cart-button">
                            <div className="quantity-button">
                                <span onClick={decreament}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increament}>+</span>
                            </div>
                            <button className="add-to-cart-button" onClick={() => {
                                handleAddToCart(data.data[0], quantity);
                                setQuantity(1);
                                existingProduct();
                            }}>
                                <FaCartPlus />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">Category : <span onClick={() => { navigate(`/category/${navigation}`) }}>{product.categories.data[0].attributes.title}</span></span>
                            <span className="text-bold">Share :
                                <span className="social-icons">
                                    <FaFacebookF />
                                    <FaInstagram />
                                    <FaLinkedinIn />
                                    <FaPinterest />
                                    <FaTwitter />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProduct productId={id} categoryId={product.categories.data[0].id} />
            </div>
        </div>
    )
};

export default SingleProduct;
