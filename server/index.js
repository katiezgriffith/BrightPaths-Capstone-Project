const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


const  {
    getVacation, deleteVacation, createVacation, updateVacation
} = require('./controller.js')

app.get(`/api/vacation`, getVacation)
app.delete(`/api/vacation/:id`, deleteVacation)
app.post(`/api/vacation/`, createVacation)
app.put(`/api/vacation/:id`, updateVacation)

app.listen(5000, () => console.log('Server running on 5000'))