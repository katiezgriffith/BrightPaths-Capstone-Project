const vacationContainer = document.querySelector('#vacation-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:5500/api/vacation`

const vacationCallback = ({ data: vacation }) => displayVacation(vacation)
const errCallback = err => console.log(err)

const getAllVacation = () => axios.get(baseURL).then(vacationCallback).catch(errCallback)
const createVacation = body => axios.post(baseURL, body).then(vacationCallback).catch(errCallback)
const deleteVacation = id => axios.delete(`${baseURL}/${id}`).then(vacationCallback).catch(errCallback)
const updateVacation = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(vacationCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let location = document.querySelector('#location')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        location: location.value,
        price: price.value, 
        imageURL: imageURL.value
    }

    createVacation(bodyObj)

    location.value = ''
    price.value = ''
    imageURL.value = ''
}

function createVacationCard(vacation) {
    const vacationCard = document.createElement('div')
    vacationCard.classList.add('vacation-card')

    vacationCard.innerHTML = `<img alt='vacation cover image' src=${vacation.imageURL} class="vacation-cover-image"/>
    <p class="location">${vacation.location}</p>
    <div class="btns-container">
        <button onclick="updateVacation(${vacation.id}, 'minus')">-</button>
        <p class="vacation-price">$${vacation.price}</p>
        <button onclick="updateVacation(${vacation.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteVacation(${vacation.id})">delete</button>
    `


    vacationContainer.appendChild(vacationCard)
}

function displayVacation(arr) {
    vacationContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createVacationCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllVacation()