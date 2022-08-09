import * as yup from 'yup';

const ProductAddSchema = yup.object().shape({
    title: yup
        .string()
        .max(35, "Max length of title is 35")
        .required("Product Title is required"),
    brand: yup
        .string()
        .max(20, "Max length of Brand is 20")
        .required("Product Brand is required"),
    category: yup
        .string()
        .max(20, "Max legth of Category is 20")
        .required("Product Category is required"),
    description: yup.string()
        .max(250, "Max length of Description is 250")
});

export default ProductAddSchema;