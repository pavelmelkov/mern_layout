const express = require('express')
const router = express.Router()

// В этом роуте будет домашняя стр пользователя. 

// Скрин новостей будет подгружать информацию из БД. 
// Компонент header и компонент профиля будет брать данные из localStorage уже на клиенте.
// Информационный компонент по дефолту будет выдвать время, количество докторов и пользователй на сайте, при клике на новость будет выдавать информацию о враче, дате создания новости.
// Информация о доключенном устройстве будет поступать предположительно через Firebase.

const { getNews } = require('../controllers/homeController')

router.route('/').get(getNews)

module.exports = router