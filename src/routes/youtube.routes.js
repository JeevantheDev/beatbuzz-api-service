const express = require('express');
const youtubeService = require('../controller/youtubeService');

const { getVideoInfo, audioStream } = youtubeService;

const router = express.Router();

router.get('/stream/:id', audioStream);
router.get('/getVideoInfo/:id', getVideoInfo);

module.exports = router;
