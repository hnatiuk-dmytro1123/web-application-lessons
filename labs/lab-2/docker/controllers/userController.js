const UserModel = require('../models/userModel');

exports.getUsers = (req, res) => {
    const users = UserModel.getAllUsers();
    res.render('userView', { users });
};

exports.createUser = (req, res) => {
    const newUser = { id: Date.now(), name: req.body.name };
    UserModel.addUser(newUser);
    res.redirect('/users');
};
