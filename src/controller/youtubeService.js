const axios = require('axios').default;

const { YOUTUBE_SERVICE } = require('../URL');

const audioStream = async (req, res) => {
  try {
    const response = await axios.get(
      YOUTUBE_SERVICE + `/stream/${req.params.id}`,
      {
        ...req,
      }
    );

    return res.send(response.data);
  } catch (error) {
    return res.send(error.response.data);
  }
};

const getVideoInfo = async (req, res) => {
  try {
    const response = await axios.get(
      YOUTUBE_SERVICE + `/getVideoInfo/${req.params.id}`,
      { ...req }
    );

    return res.send(response.data);
  } catch (error) {
    return res.send(error.response.data);
  }
};

module.exports = {
  audioStream,
  getVideoInfo,
};
