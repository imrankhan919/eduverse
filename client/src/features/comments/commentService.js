import axios from "axios"

export const fetchComments = async (eid) => {
    const response = await axios.get("/api/event/" + eid + "/comment")
    return response.data
}

const commentService = { fetchComments }

export default commentService 