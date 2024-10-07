const UserModel = require('../models/userModel');

class UserPresenter {
    constructor() {
        this.model = UserModel;
    }

    getUserList() {
        return this.model.getAllUsers();
    }

    createUser(name) {
        const newUser = { id: Date.now(), name };
        this.model.addUser(newUser);
    }
}

module.exports = UserPresenter;
