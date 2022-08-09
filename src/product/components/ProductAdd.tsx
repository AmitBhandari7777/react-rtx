import React from "react";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useProductAddApiMutation, useProductListApiQuery } from '../query/productApi';
import { ProductAddRequest } from '../query/productTypes';
// import ProductAddSchema from '../validation/ProductAddSchema';
import { yupResolver } from "@hookform/resolvers/yup";

import './ProductAdd.css';
import ProductAddSchema from "./ProductAddSchema";

const ProductAdd = () => {
    const { data, isError, isLoading } = useProductListApiQuery();
    const [addNewProduct, response] = useProductAddApiMutation();

    const initialValue: ProductAddRequest = {
        title: "",
        brand: "",
        category: "",
        description: ""
    }

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        getValues,
        formState: { errors },
        reset,
    } = useForm<ProductAddRequest>({
        defaultValues: initialValue,
        mode: 'onChange',
        resolver: yupResolver(ProductAddSchema)
    });





    // const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    const onSubmit = (data: ProductAddRequest) => {
        // e.preventDefault();
        addNewProduct(data)
            .unwrap()
            .then((payload) => {
                console.log("payload", payload);
                // (data?.products as Product[]).splice(0, 0, payload as Product);
            })
            .then((error) => {
                console.log("Product Add Successful");
                console.log(error);
            })
        reset();
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}>

                <div className='product-input'>
                    <input
                        type="text"
                        placeholder="Title"
                        {...register('title')}
                        // onChange={e => {
                        //     initialValue.title = e.target.value;
                        //     // setValue(value);
                        // }} 
                        />
                </div>
                <small style={{ color: "red" }}>{errors.title?.message}</small>
                <div className='product-input'>
                    <input
                        type="text"
                        // name="brand"
                        placeholder="Brand"
                        {...register('brand')}
                        // onChange={e => {
                        //     initialValue.brand = e.target.value;
                        //     // setValue(value);
                        // }}
                         />
                </div>
                <small style={{ color: "red" }}>{errors.brand?.message}</small>
                <div className='product-input'>
                    <input
                        type="text"
                        // name="category"
                        placeholder="Category"
                        {...register('category')}
                        // onChange={e => {
                        //     initialValue.category = e.target.value;
                        //     // setValue(value);
                        // }} 
                        />
                </div>
                <small style={{ color: "red" }}>{errors.category?.message}</small>
                <div className='product-input'>
                    <input
                        type="text"
                        // name="description"
                        placeholder="Description"
                        {...register('description')}
                        // onChange={e => {
                        //     initialValue.description = e.target.value;
                        //     // setValue(value);
                        // }}
                         />
                </div>
                <small style={{ color: "red" }}>{errors.description?.message}</small>
                {/* <button type="submit">Add Product</button> */}
                <input type="submit" />
            </form>
        </div>
    );
}


export default ProductAdd;

