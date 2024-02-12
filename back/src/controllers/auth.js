const express = require('express')
const router = express.Router()

const { Users } = require('../services/users')

router.post('/signup', async (req, res) => {
  const { email, password } = req.body

  try {
    const existingUsers = Users.findUser(email)

    if (existingUsers) {
      throw new Error('Користувач з таким email вже існує')
    }

    const confirmCode = Math.floor(Math.random() * 9999 + 1000)
    console.log('Confirmation code: ', confirmCode)
    Users.addUser({ email, password, confirmCode })

    res
      .status(200)
      .json({ message: 'Реєстрація пройшла успішно' })

  } catch (error) {
    console.error(error)
    res.status(400).json({ message: error.message })
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body

  try {
    const existingUsers = Object.assign({}, Users.findUser(email, password))

    if (!existingUsers) {
      throw new Error('Користувача з таким email не знайдено')
    }

    if (existingUsers.password !== password) {
      throw new Error('Невірний пароль')
    }

    delete existingUsers.password

    res
      .status(200)
      .json({ email: existingUsers.email, token: 'asdasdasdaskfgdwjrf23ugfhdsmvfds' })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: error.message })
  }

});

router.post('signup-confirm', async (req, res) => {
  const { email, confirmCode } = req.body

  try {
    const existingUsers = Users.findUser(email)

    if (!existingUsers) {
      throw new Error('Користувача з таким email не знайдено')
    }

    if (existingUsers.confirmCode !== confirmCode) {
      throw new Error('Невірний код підтвердження')
    }

    Users.updateIsConfirmed(email)

    res
      .status(200)
      .json({ token: 'asdasdasdaskfgdwjrf23ugfhdsmvfds', isConfirmed: existingUsers.isConfirmed })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: error.message })
  } 
})

module.exports = router
