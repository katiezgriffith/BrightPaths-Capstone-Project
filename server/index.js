const express = require('express')
const cors = require('cors')
const path = require('path')



const app = express()

// dotenv.config({ path: './.env'})

app.use(express.json())
app.use(cors())

//static address
app.use(express.static(path.join(__dirname, 'client')))


const  {
    getVacation, deleteVacation, createVacation, updateVacation
} = require('./controller.js')

app.get(`/api/vacation`, getVacation)
app.delete(`/api/vacation/:id`, deleteVacation)
app.post(`/api/vacation/`, createVacation)
app.put(`/api/vacation/:id`, updateVacation)

const {SERVER_PORT} = process.env


app.listen(5500, () => console.log('Server running on 5500'))