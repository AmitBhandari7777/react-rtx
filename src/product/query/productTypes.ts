

export interface Product {

    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: "...",
    images: []

}


export interface ProductListResponse {
    products: Product[],
    total: number,
    skip: number,
    limit: number

}


export interface ProductAddRequest {
    title: string,
    brand: string,
    category: string,
    description: string,
}


export default Product;