const router = require('express').Router();
const { postPin, getPin } = require('../controllers/pinController');

router.post('/', postPin);

router.get('/', getPin)

module.exports = router;