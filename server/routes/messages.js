const { addMessage, getMessages } = require('../controllers/messageController');
const router = require('express').Router();

router.post('/addmsg/', addMessage);
router.post('/getMsg/', getMessages);

module.exports = router;