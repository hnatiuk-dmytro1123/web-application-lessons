const UserViewModel = require('../viewModels/userViewModel');
const userModel = require('../models/userModel');

exports.getUsers = (req, res) => {
    const viewModel = new UserViewModel();
    res.render('userView', { users: viewModel.getUserList() });
};

exports.createUser = (req, res) => {
    const newUser = { id: Date.now(), name: req.body.name };
    userModel.addUser(newUser);
    res.redirect('/users');
};