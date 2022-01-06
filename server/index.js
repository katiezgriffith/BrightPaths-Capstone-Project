const express = require('express')
const cors = require('cors')
const path = require('path')



const app = express()

// dotenv.config({ path: './.env'})

app.use(express.json())
app.use(cors())

//static address
//app.use(express.static(path.join(__dirname, 'client')))
app.use(express.static("client"))

app.get("/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "client/css"));
});

app.get("/js", (req, res) => {
    res.sendFile(path.join(__dirname, "client/js"));
});

const  {
    getVacation, deleteVacation, createVacation, updateVacation, renderHome
} = require('./controller.js')

app.get("/", renderHome)
app.get(`/api/vacation`, getVacation)
app.delete(`/api/vacation/:id`, deleteVacation)
app.post(`/api/vacation/`, createVacation)
app.put(`/api/vacation/:id`, updateVacation)

const PORT = process.env.PORT || 5500


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));