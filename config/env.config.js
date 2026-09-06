const dotenv = require('dotenv');

if (!process.env.CI) {
    dotenv.config();
}

const config = {
    baseUrl: process.env.BASE_URL,
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD
};

module.exports = config;