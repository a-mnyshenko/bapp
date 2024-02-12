const crypto = require('crypto');
const UserConfirmService = require('./user-confirm')

const testUser = {
    sub: crypto.randomBytes(20).toString('hex'), 
    email: 'test_user', 
    password: '12345', 
    isConfirmed: false
}

class Users {
    constructor() {
      this.users = [testUser];
      this.userConfirmService = UserConfirmService.UserConfirm
    }
  
    addUser(user) {
      const userId = crypto.randomBytes(20).toString('hex')
      this.userConfirmService.addUser({sub: userId, ...user})
      this.users.push(user);
    }
  
    findUser(email) {
      return this.users.find((user) => user.email === email);
    }

    updateIsConfirmed(email) {
      const user = this.users.find((user) => user.email === email);
      user.isConfirmed = true;
      confirmCode = '';
    }
} 

module.exports = {
    Users: new Users(),
}
