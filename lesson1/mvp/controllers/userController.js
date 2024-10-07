const UserPresenter = require('../presenters/userPresenter');
const userPresenter = new UserPresenter();

exports.getUsers = (req, res) => {
    const users = userPresenter.getUserList();
    res.render('userView', { users });
};

exports.createUser = (req, res) => {
    const userName = req.body.name;
    userPresenter.createUser(userName);
    res.redirect('/users');
};
