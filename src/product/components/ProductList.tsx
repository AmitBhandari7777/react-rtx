import { useProductListApiQuery } from "../query/productApi";
import Product from "../query/productTypes";
import ProductItem from "./ProductItem";



const ProductList = () => {
    const { data, isError, isLoading } = useProductListApiQuery("");

    const count = data?.products.length as number;
    const products = data?.products as Product[];
    return (
        <div>
            {count > 0 && products.map((item: Product) => (
                <div>
                    <ProductItem
                        {...item} />

                </div>
            ))}
        
        </div>

    );
}

export default ProductList;