const User = require("../models/userModel");

// POST REQUEST
exports.login = async (request, response) => {
    try {
        const user = await User.findOne({ username: request.body.username });
        // FIXME: Do not store password in cookie (take it away)
        if (user.password == request.body.password) {
            request.session.user = user;
            response.json({ message: "User is logged in.", user: user });
        } else if (user.password != request.body.password) {
            response.json({ message: "Wrong password" });
        } else {
            response.json({ message: "Username doesn't exist." });
        }
    } catch (err) {
        response.status(400).json(err);
    }
};

exports.logout = (request, response) => {
    request.session.destroy();
    response.json({ message: "User logged out." });
};
