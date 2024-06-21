import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import "./ProductList.css";
import productsData from "../../../data.json";

function ProductList({ searchQuery }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(productsData);
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="product-list">
            {filteredProducts.length === 0 ? (
                <h1 className="search-message">¡No se encontraron productos! <br />:(</h1>
            ) : (
                filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
        </div>
    );
}

export default ProductList;
