const config = {};

config.mongoURI = {
    development: "mongodb://localhost:27017/todoapp",
    test: "mongodb://localhost:27017/todoapp-test",
    production: process.env.MONGODB_URL,
};

module.exports = config;
