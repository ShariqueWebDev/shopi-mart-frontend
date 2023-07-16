import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from '../Products/Products'

import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { useEffect, useContext } from "react";


const Home = () => {
    const context = useContext(Context);
    const {categories, setCategories, products, setProducts} = context;

    useEffect(()=>{
        getProducts();
        getCategories();
        // eslint-disable-next-line 
    }, []);

    // HOME PAGE PRODUCT API
    const getProducts = () =>{
        fetchDataFromApi('/api/products?populate=*').then((res)=>{
            console.log(res);
            setProducts(res)

        })
    }

    // HOME PAGE CATEGORIES API
    const getCategories = ()=>{
        fetchDataFromApi('/api/categories?populate=*').then((res)=>{
            console.log(res);
            setCategories(res);
        })
    }
    return (
        <div className="home">
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories = {categories} />
                    <Products headingText="Popular Products" products = {products} />
                </div>
            </div>
        </div>
    )
};

export default Home;
