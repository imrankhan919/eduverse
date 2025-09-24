const getProducts = async (req, res) => {
    res.send("All Products")
}

const addProduct = async (req, res) => {
    res.send("Add Product")
}

const getProduct = async (req, res) => {
    res.send("Get Single Product")
}

const updateProduct = async (req, res) => {
    res.send("Update Product")
}

module.exports = { getProducts, addProduct, getProduct, updateProduct }