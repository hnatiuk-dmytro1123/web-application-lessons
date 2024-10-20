class UserModel {
    constructor() {
        this.users = [{ id: 1, name: 'John Doe' }];
    }

    getAllUsers() {
        return this.users;
    }

    addUser(user) {
        this.users.push(user);
    }
}

module.exports = new UserModel();
