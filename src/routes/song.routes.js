const express = require('express');
const songService = require('../controller/songService');

const {
  createSong,
  updateSong,
  deleteSong,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
} = songService;

const router = express.Router();

router.post('/create/song', createSong);
router.put('/update/song', updateSong);
router.delete('/delete/song/:id', deleteSong);

router.post('/create/playlist', createPlaylist);
router.put('/update/playlist', updatePlaylist);
router.delete('/delete/playlist/:id', deletePlaylist);

module.exports = router;
