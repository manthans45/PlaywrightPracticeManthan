const environments = {
    dev: {
        baseUrl: 'https://rahulshettyacademy.com/client'
    },

    qa: {
        baseUrl: 'https://rahulshettyacademy.com/client'
    },

    uat: {
        baseUrl: 'https://rahulshettyacademy.com/client'
    },

    prod: {
        baseUrl: 'https://rahulshettyacademy.com/client'
    }
};

const environment = process.env.ENV || 'qa';

if (!environments[environment]) {
    throw new Error(
        `Invalid environment: ${environment}. Use dev, qa, uat or prod.`
    );
}

module.exports = {
    environment,
    ...environments[environment],

    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD
};