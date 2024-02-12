class User {
  static #list = [{ email: 'qwerty', password: '1234' }]

  constructor({ email, password }) {
    this.email = email
    this.password = password
  }

  static create(data) {
    const user = new User(data)

    this.#list.push(user)
  }

  static findUser(email) {
    console.log('ASDASD')
    return this.#list.find((user) => user.email === email)
  }
}

module.export = {
  User
}
