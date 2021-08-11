const User = require('../models/user');
const bcrypt = require('bcrypt');


const registerUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        const user = await newUser.save();

        res.status(200).json(user._id);
    } catch (e) {
        console.log(e)
        res.status(500).json(e);
    }
}

const getRegisteredUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json(e)
    }
}

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            res.status(400).json('Username or password is incorrect.')
        }
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword) {
            res.status(400).json('Username or password is incorrect.')
        }
        res.status(200).json({ _id: user._id, username: user.username });
    } catch (e) {
        res.status(500).json(e)
    }
}


module.exports = { registerUser, getRegisteredUser, loginUser }