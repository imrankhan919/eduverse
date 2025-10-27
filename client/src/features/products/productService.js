import axios from "axios"

const fetchProducts = async () => {
    const response = await axios.get('/api/product')
    return response.data
}

const fetchProduct = async (id) => {
    const response = await axios.get('/api/product/' + id)
    return response.data
}


const productService = { fetchProducts, fetchProduct }

export default productService