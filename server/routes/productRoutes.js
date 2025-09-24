const express = require('express')
const { getProducts, addProduct, getProduct, updateProduct } = require('../controllers/productController')



const router = express.Router()


router.get("/", getProducts)
router.post("/", addProduct)
router.get("/:id", getProduct)
router.put("/:id", updateProduct)


module.exports = router