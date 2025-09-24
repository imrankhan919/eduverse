const express = require('express')
const { getMessages, sendMessage } = require('../controllers/messageController')

const router = express.Router()

router.get("/:pid", getMessages)
router.post("/:pid", sendMessage)


module.exports = router