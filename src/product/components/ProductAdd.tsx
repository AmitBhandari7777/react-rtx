import { useState } from 'react';
import { useProductAddApiMutation, useProductListApiQuery } from '../query/productApi';
import Product, { ProductAddRequest } from '../query/productTypes';
import './ProductAdd.css';


export function ProductAdd() {
    const { data, isError, isLoading } = useProductListApiQuery();
    const [addNewProduct, response] = useProductAddApiMutation();

    const initialValue: ProductAddRequest = {
        title: "",
        brand: "",
        category: "",
        description: ""
    }
    const [value, setValue] = useState(initialValue);

    const onSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        addNewProduct(initialValue)
            .unwrap()
            .then((payload) => {
                console.log("payload", payload);
                // (data?.products as Product[]).splice(0, 0, payload as Product);
            })
            .then((error) => {
                console.log("Product Add Successful");
                console.log(error);
            })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='product-input'>
                    <input
                        type="text"
                        name="title"
                        onChange={e => {
                            initialValue.title = e.target.value;
                            // setValue(value);
                        }}
                        placeholder="Title" />
                </div>

                <div className='product-input'>
                    <input
                        type="text"
                        name="brand"
                        onChange={e => {
                            initialValue.brand = e.target.value;
                            // setValue(value);
                        }}
                        placeholder="Brand" />
                </div>

                <div className='product-input'>
                    <input
                        type="text"
                        name="category"
                        onChange={e => {
                            initialValue.category = e.target.value;
                            // setValue(value);
                        }}
                        placeholder="Category" />
                </div>

                <div className='product-input'>
                    <input
                        type="text"
                        name="description"
                        onChange={e => {
                            initialValue.description = e.target.value;
                            setValue(value);
                        }}
                        placeholder="Description" />
                </div>

                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}