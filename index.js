require('dotenv').config();

const app = require('./src/server');

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`API service is running on PORT ${PORT}`));
