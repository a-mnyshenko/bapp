const crypto = require('crypto');

class UserConfirm {
    constructor() {
        this.usersConfirmChalange = []
    }

    addUser(user) {
        const confirmCode = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
        this.usersConfirmChalange({...user, confirmCode})
    }

    updateUserConfirmation(sub, confirmationCode) {
        const user = this.usersConfirmChalange.find((user) => user.sub === sub)
        if (user) {
            user.isConfirmed = true
            return user
        } else {
            return null
        }
    }
}

module.exports = {
    UserConfirm: new UserConfirm()
}