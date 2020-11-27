const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(colors.green(`Serever run on port ${PORT}`)))