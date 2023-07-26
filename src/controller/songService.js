const axios = require('axios').default;

const { SONG_SERVICE } = require('../URL');

const createSong = async (req, res) => {
  try {
    const { body, ...rest } = req;
    const response = await axios.post(SONG_SERVICE + '/create/song', body, {
      ...rest,
    });
    return res.send(response.data);
  } catch (error) {
    return res.send(error.response.data);
  }
};

const updateSong = async (req, res) => {
  try {
    const { body, ...rest } = req;
    const response = await axios.post(SONG_SERVICE + '/update/song', body, {
      ...rest,
    });
    return res.send(response.data);
  } catch (error) {
    return res.send(error.response.data);
  }
};

const deleteSong = async (req, res) => {
  try {
    const response = await axios.delete(
      SONG_SERVICE + `/delete/song/${req.params.id}`,
      {
        ...req,
      }
    );
    return res.send(response.data);
  } catch (error) {
    return res.send(error.response.data);
  }
};

const createPlaylist = async (req, res) => {
  try {
    const { body, ...rest } = req;
    const response = await axios.post(SONG_SERVICE + '/create/playlist', body, {
      ...rest,
    });
    return res.send(response.data);
  } catch (error) {
    return res.send(error.response.data);
  }
};

const updatePlaylist = async (req, res) => {
  try {
    const { body, ...rest } = req;
    const response = await axios.post(SONG_SERVICE + '/update/playlist', body, {
      ...rest,
    });
    return res.send(response.data);
  } catch (error) {
    return res.send(error.response.data);
  }
};

const deletePlaylist = async (req, res) => {
  try {
    const response = await axios.delete(
      SONG_SERVICE + `/delete/playlist/${req.params.id}`,
      {
        ...req,
      }
    );
    return res.send(response.data);
  } catch (error) {
    return res.send(error.response.data);
  }
};

module.exports = {
  createSong,
  updateSong,
  deleteSong,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
};
