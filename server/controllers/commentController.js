const addComment = async (req, res) => {
    res.send("Add Comment")
}

const getComments = async (req, res) => {
    res.send("All Comments")
}


module.exports = { addComment, getComments }