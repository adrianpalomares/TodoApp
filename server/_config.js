const config = {};

config.mongoURI = {
    development: "mongodb://localhost:27017/todoapp",
    test: "mongodb://localhost:27017/todoapp-test",
    production: process.env.MONGO_URL,
};

module.exports = config;
