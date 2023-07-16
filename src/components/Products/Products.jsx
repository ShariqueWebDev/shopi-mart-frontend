import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ innerPage, headingText, products }) => {
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading"  >{headingText}</div>}
            <div className="products">
                {products?.data.map((item) => {
                    // PRODUCT PAGE HERE
                    return <Product
                        key={item.id}
                        id={item.id}
                        data={item.attributes} />
                })}
            </div>
        </div>)
};

export default Products;
