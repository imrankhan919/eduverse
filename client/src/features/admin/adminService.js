import axios from "axios"

const API_URL = "/api/admin/"


const fetchAllUsers = async (token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + "users", options)
    return response.data
}

const fetchAllEvents = async () => {
    const response = await axios.get("/api/event")
    return response.data
}

const fetchAllListings = async () => {
    const response = await axios.get("/api/product")
    return response.data
}


const adminService = { fetchAllUsers, fetchAllEvents, fetchAllListings }

export default adminService 