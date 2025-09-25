const express = require('express')
const { getEvents, getEvent } = require('../controllers/eventController')

const router = express.Router()

router.get("/", getEvents)
router.get("/:eid", getEvent)

router.use("/:eid/comment", require("./commentRoutes"))


module.exports = router