const express = require('express')
const userRoutes = require('./Routes/userRoutes')
const db = require('./Config/database')
const app = express()

const port = 4700

app.use(express.json())
app.use(userRoutes)
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})