const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const colors = require('colors')
const path = require('path')

//routes
const homeRoutes = require('./routes/homeRoutes')

dotenv.config()

connectDB() // асинхронная функция подключения к БД

const app = express()

app.use(express.json()) // для подключения передачи по json между сервером и клиеннтом

app.use('/api/home', homeRoutes) // роут гланой страницы

if (process.env.NODE_ENV === 'development') {
    app.use(express.static(path.join(__dirname, '..', 'frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('API is running...')
    })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(colors.green(`Serever run on port ${PORT}`)))