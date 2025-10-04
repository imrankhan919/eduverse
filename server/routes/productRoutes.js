const express = require('express')
const { getProducts, addProduct, getProduct, updateProduct } = require('../controllers/productController')
const protect = require('../middleware/authMiddleware')



const router = express.Router()


router.get("/", getProducts)
router.post("/", protect, addProduct)
router.get("/:id", getProduct)
router.put("/:id", protect, updateProduct)


module.exports = router