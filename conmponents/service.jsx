import { getProducts } from "../api/products";

export const productService = {
    getProduct: async () => {
        const data = await getProducts();
        return data.product.slice();
    },
    getproductById: async id => {
        const data = await getProducts();
        return data.product.find(item => item.id.toString() === id.toString());
    }
}
    

 