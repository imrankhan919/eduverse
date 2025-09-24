const getMessages = async (req, res) => {
    res.send("All Messages Here...")
}

const sendMessage = async (req, res) => {
    res.send("Message Sent..")
}

module.exports = { getMessages, sendMessage }