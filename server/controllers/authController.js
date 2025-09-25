const bcrypt = require('bcryptjs')
const User = require("../models/userModel")

const registerUser = async (req, res) => {

    let { name, email, phone, password } = req.body

    if (!name || !email || !phone || !password) {
        res.status(400)
        throw new Error("Please Fill All Details")
    }

    // Check if user already exists
    let emailExist = await User.findOne({ email: email })
    let phoneExist = await User.findOne({ phone: phone })

    if (emailExist || phoneExist) {
        res.status(400)
        throw new Error('User Already Exist')
    }


    // Check if phone number is valid
    if (phone.length !== 10) {
        res.status(400)
        throw new Error('Please Enter Valid Phone Number')
    }

    // Hash Password
    let salt = await bcrypt.genSalt(10)
    let hashedPassword = await bcrypt.hash(password, salt)



    // Create User
    let user = await User.create({
        name,
        email,
        phone,
        password: hashedPassword
    })


    if (!user) {
        res.status(400)
        throw new Error('User Not Created!')
    }


    res.status(201).json(user)


}

const loginUser = async (req, res) => {
    res.send('User Logined')
}


module.exports = { registerUser, loginUser }