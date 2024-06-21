import "./ProductCard.css";

function ProductCard({ product }) {
    return (
        <>
            <a href="#" className="product-card-container">
                <div className="product-card">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="product-image"
                    />
                    <div className="product-info">
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-description">
                            {product.description}
                        </p>
                        <p className="product-price">{product.price}</p>
                    </div>
                </div>
            </a>
        </>
    );
}

export default ProductCard;
