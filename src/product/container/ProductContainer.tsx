import { ProductAdd } from "../components/ProductAdd";
import ProductList from "../components/ProductList";
import { useProductListApiQuery } from "../query/productApi";



export const ProductContainer = () => {
    const { data, isError, isLoading } = useProductListApiQuery();

    return (
        <div>
            <ProductAdd />

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