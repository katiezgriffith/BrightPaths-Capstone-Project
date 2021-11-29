const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get("/api/tip", (req, res) => {
    const tips =["You don’t have to pay your dues",
    "Don’t be realistic, alter your reality instead",
    "Pick a mentor over higher pay",
  
    ];
  
   
    let randomIndex = Math.floor(Math.random() * tips.length);
    let randomTip = tips[randomIndex];
    Rollbar.info('Someone tapped the API')
    res.status(200).send(randomTip);
    
  });
const  {
    getVacation, deleteVacation, createVacation, updateVacation
} = require('./controller.js')

app.get(`/api/vacation`, getVacation)
app.delete(`/api/vacation/:id`, deleteVacation)
app.post(`/api/vacation/`, createVacation)
app.put(`/api/vacation/:id`, updateVacation)

app.listen(5000, () => console.log('Server running on 5000'))