const express = require('express');
const userService = require('../controller/userService');

const { signup, login, remove, validToken } = userService;

const router = express.Router();

router.get('/validToken', validToken);
router.post('/signup', signup);
router.post('/login', login);

router.delete('/remove', remove);

module.exports = router;
