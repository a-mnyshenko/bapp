// Підключаємо роутер до бек-енду
const express = require('express');
const router = express.Router();

// Підключіть файли роутів
// const test = require('./test')
const auth = require('./auth');
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
// router.use('/', test)
// Використовуйте інші файли роутів, якщо є

router.use('/auth', auth);

router.get('/', (req, res) => {
  res.status(200).json('Hello World');
})
// router.get('/', function (req, res) {
//   res.render('index', {
//     name: 'index',
//     component: [''],
//     title: 'Wellcom page',
//     data: {},
//   })
// })
// Експортуємо глобальний роутер
module.exports = router;
