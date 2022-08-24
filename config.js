require('dotenv').config();

module.exports = {
  port: process.env.PORT || 4001,
  mongoUri: process.env.MongoDB_URI,
};