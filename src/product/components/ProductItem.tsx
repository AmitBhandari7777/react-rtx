import Product from "../query/productTypes";



export const ProductItem = (product: Product) => {

    return (
        <div>
            <h3>{product.brand}-{product.title}</h3>
            <p />
            <h4>{product.category}</h4>
            <p />
            <label>{product.description}</label>
            <hr />
        </div>
    );
}

export default ProductItem;