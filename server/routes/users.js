const router = require('express').Router();
const { registerUser, getRegisteredUser, loginUser } = require('../controllers/userController');

router.post('/register', registerUser)

router.get('/register', getRegisteredUser)

router.post('/login', loginUser)

module.exports = router