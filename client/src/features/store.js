import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth/authSlice"
import admin from "./admin/adminSlice"
import products from "./products/productSlice"
import events from "./events/eventsSlice"
import comments from "./comments/commentsSlice"
import message from "./messages/messageSlice"

const store = configureStore({
    reducer: { auth, admin, products, events, comments, message }
})


export default store