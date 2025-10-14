import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminService from "./adminService";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        allUsers: [],
        allEvents: [],
        allListings: [],
        allComments: [],
        adminLoading: false,
        adminSuccess: false,
        adminError: false,
        adminErrorMessage: ""
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllUsers.pending, (state, action) => {
                state.adminLoading = true
                state.adminSuccess = false
                state.adminError = false
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = true
                state.allUsers = action.payload
                state.adminError = false
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = false
                state.adminError = true
                state.adminErrorMessage = action.payload
            })
            .addCase(getAllEvents.pending, (state, action) => {
                state.adminLoading = true
                state.adminSuccess = false
                state.adminError = false
            })
            .addCase(getAllEvents.fulfilled, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = true
                state.allEvents = action.payload
                state.adminError = false
            })
            .addCase(getAllEvents.rejected, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = false
                state.adminError = true
                state.adminErrorMessage = action.payload
            })
            .addCase(getAllListings.pending, (state, action) => {
                state.adminLoading = true
                state.adminSuccess = false
                state.adminError = false
            })
            .addCase(getAllListings.fulfilled, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = true
                state.allListings = action.payload
                state.adminError = false
            })
            .addCase(getAllListings.rejected, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = false
                state.adminError = true
                state.adminErrorMessage = action.payload
            })
            .addCase(updateListing.pending, (state, action) => {
                state.adminLoading = true
                state.adminSuccess = false
                state.adminError = false
            })
            .addCase(updateListing.fulfilled, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = true
                state.allListings = state.allListings.map(item => item._id === action.payload._id ? action.payload : item)
                state.adminError = false
            })
            .addCase(updateListing.rejected, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = false
                state.adminError = true
                state.adminErrorMessage = action.payload
            })
            .addCase(updateUser.pending, (state, action) => {
                state.adminLoading = true
                state.adminSuccess = false
                state.adminError = false
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = true
                state.allUsers = state.allUsers.map(item => item._id === action.payload._id ? action.payload : item)
                state.adminError = false
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = false
                state.adminError = true
                state.adminErrorMessage = action.payload
            })
    }
})


export default adminSlice.reducer



// FETCH ALL USERS : (ADMIN)
export const getAllUsers = createAsyncThunk("FETCH/USERS/ADMIN", async (_, thunkAPI) => {

    let token = thunkAPI.getState().auth.user.token

    try {
        return await adminService.fetchAllUsers(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// FETCH ALL EVENTS : (ADMIN)
export const getAllEvents = createAsyncThunk("FETCH/EVENTS/ADMIN", async (_, thunkAPI) => {
    try {
        return await adminService.fetchAllEvents()
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// FETCH ALL EVENTS : (ADMIN)
export const getAllListings = createAsyncThunk("FETCH/LISTINGS/ADMIN", async (_, thunkAPI) => {
    try {
        return await adminService.fetchAllListings()
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// UPDATE LISTING : (ADMIN)
export const updateListing = createAsyncThunk("UPDATE/LISTING/ADMIN", async (updatedProduct, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.updateListing(updatedProduct, token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// UPDATE USER : (ADMIN)
export const updateUser = createAsyncThunk("UPDATE/USER/ADMIN", async (updatedUser, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.updateUser(updatedUser, token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})