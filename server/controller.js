const vacation = require('./db.json')
globalId= 4
const path = require("path")

module.exports ={
    getVacation:(req, res) => res.status(200).send(vacation),
    deleteVacation:(req, res) => {
        let index=vacation.findIndex(elem => elem.id === +req.params.id)
        vacation.splice(index, 1)
        res.status(200).send(vacation)
    },
    createVacation:(req,res) => {
        let {id , location, price, imageURL} = req.body
        let newVacation = {
            id:globalId,
            location,
            price,
            imageURL
        }
        vacation.push(newVacation)
        res.status(200).send(vacation)
        globalId++
    },
    updateVacation: (req, res) => {
        let {id} = req.params
        let {type}= req.body
        let index = vacation.findIndex(elem => elem.id === +id)

        if (vacation[index].price <= 1000 && type === 'minus') {
            jobs[index].salary = 1000
            res.status(200).send(vacation)
        } else if (type === 'plus') {
            vacation[index].price += 100
            res.status(200).send(vacation)
        } else if (type === 'minus') {
            vacation[index].price -= 100
            res.status(200).send(vacation)
        } else {
            res.sendStatus(400)
        }
    },
    renderHome: (req, res) => res.status(200).sendFile(path.join(__dirname, "../client/views/index.html"))
}


