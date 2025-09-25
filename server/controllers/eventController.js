const getEvents = async (req, res) => {
    res.send("All Events")
}


const getEvent = async (req, res) => {
    res.send("Single Event")
}


module.exports = { getEvent, getEvents }