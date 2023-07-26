const express = require('express');
const serverless = require('serverless-http');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const userRoutes = require('./routes/user.routes');
const songRoutes = require('./routes/song.routes');
const youtubeRoutes = require('./routes/youtube.routes');

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* Base API URL */
const BASE_URL = '/.netlify/functions/server';

const AUTH_ROOT_URL = '/api/v1/beatbuzz/auth';
const SONG_ROOT_URL = '/api/v1/beatbuzz/song';
const YOUTUBE_ROOT_URL = '/api/v1/beatbuzz/youtube';

app.use(BASE_URL + AUTH_ROOT_URL, userRoutes);
app.use(BASE_URL + SONG_ROOT_URL, songRoutes);
app.use(BASE_URL + YOUTUBE_ROOT_URL, youtubeRoutes);

module.exports = app;
module.exports.handler = serverless(app);
