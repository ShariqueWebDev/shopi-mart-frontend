import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Category.scss";
import { useParams } from "react-router-dom";

// MAIN CATEGORIES PRODUCTS PAGE
const Category = () => {
    const { id } = useParams();

    const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {data?.data[0].attributes.categories.data[0].attributes.title}
                    <Products innerPage={true} products={data} />
                </div>
            </div>

        </div>
    );
};

export default Category;