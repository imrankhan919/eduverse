const Message = require("../models/messageModel")
const Listing = require("../models/listingModel")


const getMessages = async (req, res) => {


    const messages = await Message.find().populate('user').populate('listing')
    const myListings = await Listing.find({ user: req.user._id })

    if (!messages) {
        res.status(404)
        throw new Error('Messages Not Found!')
    }

    // Todo : Send Message Only Avaialable In My Listing
    // let myMessages = []

    // for (let i = 0; i < messages.length; i++) {
    //     if (myListings.includes(messages[i].listing._id)) {
    //         myMessages.push(messages[i])
    //     }
    // }


    res.status(200).json(messages)
}

const sendMessage = async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please Add Text!')
    }

    const newMessage = await Message.create({ text: req.body.text, user: req.user._id, listing: req.params.pid })

    if (!newMessage) {
        res.status(400)
        throw new Error("Message Not Sent!")
    }

    res.status(201).json(newMessage)
}

module.exports = { getMessages, sendMessage }