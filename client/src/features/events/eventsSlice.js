import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import eventService from "./eventService";

const eventsSlice = createSlice({
    name: "events",
    initialState: {
        allEvents: [],
        event: {},
        eventsLoading: false,
        eventsSuccess: false,
        eventsError: false,
        eventErrorMessage: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEvents.pending, (state, action) => {
                state.eventsLoading = true
                state.eventsSuccess = false
                state.eventsError = false
            })
            .addCase(getEvents.fulfilled, (state, action) => {
                state.eventsLoading = false
                state.eventsSuccess = true
                state.allEvents = action.payload
                state.eventsError = false
            })
            .addCase(getEvents.rejected, (state, action) => {
                state.eventsLoading = false
                state.eventsSuccess = false
                state.eventsError = true
                state.eventErrorMessage = action.payload
            })
            .addCase(getEvent.pending, (state, action) => {
                state.eventsLoading = true
                state.eventsSuccess = false
                state.eventsError = false
            })
            .addCase(getEvent.fulfilled, (state, action) => {
                state.eventsLoading = false
                state.eventsSuccess = true
                state.event = action.payload
                state.eventsError = false
            })
            .addCase(getEvent.rejected, (state, action) => {
                state.eventsLoading = false
                state.eventsSuccess = false
                state.eventsError = true
                state.eventErrorMessage = action.payload
            })
    }
})


export default eventsSlice.reducer


// GET EVENTS
export const getEvents = createAsyncThunk("FETCH/EVENTS", async () => {
    try {
        return await eventService.fetchEvents()
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// GET EVENT
export const getEvent = createAsyncThunk("FETCH/EVENT", async (eid) => {
    try {
        return await eventService.fetchEvent(eid)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})