const express = require('express')
const { getAllUsers, updateUser, addEvent, updateEvent, updateProductListing, getAllComments } = require('../controllers/adminController')


const router = express.Router()


router.get("/users", getAllUsers)
router.put("/users/:uid", updateUser)
router.post("/event", addEvent)
router.put("/event/:eid", updateEvent)
router.put("/product/:pid", updateProductListing)
router.get("/comment/:eid", getAllComments)



module.exports = router