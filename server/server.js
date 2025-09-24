const express = require('express')
require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/dbConfig')

const PORT = process.env.PORT || 5000
const app = express()

// DB Connection
connectDB()

// Home Route
app.get("/", (req, res) => {
    res.json({
        msg: "WELCOME TO EDUVERSE API 1.0"
    })
})


// Auth Routes
app.use("/api/auth", require("./routes/authRoutes"))

// Listing Routes
app.use("/api/product", require("./routes/productRoutes"))

// Messages Routes
app.use("/api/message", require("./routes/messageRoutes"))

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNIG AT PORT : ${PORT}`.bgBlue.black)
})