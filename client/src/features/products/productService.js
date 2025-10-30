import axios from "axios"

const fetchProducts = async () => {
    const response = await axios.get('/api/product')
    return response.data
}

const fetchProduct = async (id) => {
    const response = await axios.get('/api/product/' + id)
    return response.data
}

const update = async (formData, token) => {
    const options = { headers: { authorization: `Bearer ${token}` } }
    const response = await axios.put("/api/product/" + formData._id, formData, options)
    return response.data
}

const add = async (formData, token) => {
    const options = { headers: { authorization: `Bearer ${token}` } }
    const response = await axios.post("/api/product/", formData, options)
    return response.data
}


const productService = { fetchProducts, fetchProduct, update, add }

export default productService