const { Router } = require('express');
const Message = require('./MessageModel');
const { getMessage, saveMessage } = require('./MessageController');

const router = Router();

router.get('/', getMessage)

router.post('/', saveMessage)

module.exports = router;