// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

const { User } = require('../class/user')

router.post('/signup', async (req, res) => {
  const { email, password } = req.body

  try {
    // Перевірка, чи користувач з таким email вже існує
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        message: 'Користувач з таким email вже існує',
      })
    }

    // Створення нового користувача
    const newUser = new User({ email, password })

    // Збереження користувача в базі даних
    await newUser.save()

    res
      .status(200)
      .json({ message: 'Реєстрація пройшла успішно' })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: 'Помилка сервера' })
  }
})
