const dotenv = require('dotenv');

if (!process.env.CI) {
    dotenv.config();
}

const environments = {
    dev: {
        baseUrl: 'https://rahulshettyacademy.com/client/'
    },

    qa: {
        baseUrl: 'https://rahulshettyacademy.com/client/'
    },

    uat: {
        baseUrl: 'https://rahulshettyacademy.com/client/'
    },

    prod: {
        baseUrl: 'https://rahulshettyacademy.com/client/'
    }
};

const environment = process.env.ENV || 'qa';

if (!environments[environment]) {
    throw new Error(
        `Invalid environment: ${environment}. Valid values: dev, qa, uat, prod`
    );
}

module.exports = {
    environment,
    baseUrl: environments[environment].baseUrl,
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD
};