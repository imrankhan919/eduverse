const getAllUsers = (req, res) => {
    res.send("Get All Users")
}

const updateUser = (req, res) => {
    res.send("Update User")
}

const addEvent = (req, res) => {
    res.send("Event Added")
}

const updateEvent = (req, res) => {
    res.send("Event Updated")
}

const updateProductListing = (req, res) => {
    res.send("Listing Updated")
}

const getAllComments = (req, res) => {
    res.send("All Comments")
}


module.exports = { getAllUsers, updateUser, addEvent, updateEvent, updateProductListing, getAllComments }


