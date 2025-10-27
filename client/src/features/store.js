import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth/authSlice"
import admin from "./admin/adminSlice"
import products from "./products/productSlice"


const store = configureStore({
    reducer: { auth, admin, products }
})


export default store