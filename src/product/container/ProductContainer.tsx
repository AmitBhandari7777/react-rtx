import ProductList from "../components/ProductList";
import { useProductListApiQuery } from "../query/productApi";



export const ProductContainer = () => {
    const { data, isError, isLoading } = useProductListApiQuery("");

    const products = data?.products;
    const count = data?.products.length;
    return (
        <div>
            {
                isError ? (
                    <>Error Occured!</>)
                    : isLoading ?
                        (<>Loading...</>)
                        : data ?
                            (
                                <div>
                                    <ProductList />
                                </div>

                            )
                            : null}
        </div>
    )
}


export default ProductContainer;