import "./Products.css";
import ProductList from "../ProductList/ProductList";

function Products({ searchQuery }) {
    return (
        <>
            <section id="products-section">
                <div className="products-container">
                    <div className="discount-banner">
                        ¡20% de descuento para nuevos clientes!
                    </div>
                    <ProductList searchQuery={searchQuery} />
                </div>
            </section>
        </>
    );
}

export default Products;
