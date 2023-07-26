const axios = require('axios').default;

const { USER_SERVICE } = require('../URL');

const validToken = async (req, res) => {
  try {
    const response = await axios.get(USER_SERVICE + '/validToken', { ...req });
    return res.send(response.data);
  } catch (error) {
    return res.send(error.response.data);
  }
};

const signup = async (req, res) => {
  try {
    const { body, ...rest } = req;
    const response = await axios.post(USER_SERVICE + '/signup', body, {
      ...rest,
    });
    return res.send(response.data);
  } catch (error) {
    return res.send(error.response.data);
  }
};

const login = async (req, res) => {
  try {
    const { body, ...rest } = req;
    const response = await axios.post(USER_SERVICE + '/login', body, {
      ...rest,
    });
    return res.send(response.data);
  } catch (error) {
    return res.send(error.response.data);
  }
};

const remove = async (req, res) => {
  try {
    const response = await axios.delete(USER_SERVICE + '/remove', { ...req });
    return res.send(response.data);
  } catch (error) {
    return res.send(error.response.data);
  }
};

module.exports = {
  validToken,
  signup,
  login,
  remove,
};
