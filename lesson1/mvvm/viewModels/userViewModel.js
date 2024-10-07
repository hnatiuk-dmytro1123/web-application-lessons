const UserModel = require('../models/userModel');

class UserViewModel {
    constructor() {
        this.users = UserModel.getAllUsers();
    }

    getUserList() {
        return this.users.map(user => {
            return { id: user.id, displayName: `User: ${user.name}` };
        });
    }
}

module.exports = UserViewModel;
