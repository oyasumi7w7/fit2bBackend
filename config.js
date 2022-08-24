require('dotenv').config();

module.exports = {
    isVercel: process.env.IS_VERCEL || false,
    port: process.env.PORT || 4001,
    mongoUri: process.env.MongoDB_URI,
};