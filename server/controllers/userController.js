const { response } = require("express");
const User = require("../models/userModel");

exports.userList = async (request, response) => {
    try {
        const users = await User.find();
        response.status(200).json(users);
    } catch (err) {
        response.status(400).json(err);
    }
};

exports.userDetail = async (request, response) => {
    try {
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    } catch (err) {
        response.status(400).json(err);
    }
};

exports.userCreate = async (request, response) => {
    try {
        const user = await User.create({
            username: request.body.username,
            password: request.body.password,
        });
        response.status(200).json(user);
    } catch (err) {
        response.status(400).json(err);
    }
};

exports.userUpdate = async (request, response) => {
    try {
        const user = await User.findById(request.params.id);
        user.username = request.body.username;
        user.password = request.body.password;
        const savedUser = await user.save();
        response.status(200).json(savedUser);
    } catch (err) {
        response.status(400).json(err);
    }
};

exports.userDelete = async (request, response) => {
    try {
        const user = await User.findOneAndRemove({ _id: request.params.id });
        response.status(200).json(user);
    } catch (err) {
        response.status(400).json(err);
    }
};
