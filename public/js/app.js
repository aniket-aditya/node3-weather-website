const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const icon = document.querySelector('#icon')
const min = document.querySelector('#min-temp')
const max = document.querySelector('#max-temp')
const humidity = document.querySelector('#humidity')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    icon.src = ''
    min.textContent = ''
    max.textContent = ''
    humidity.textContent = ''

    
    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {

        if(data.error) {
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast.forecastData
            icon.src = data.forecast.icon
            min.textContent = 'Minimum Temperature: ' + data.forecast.min_temp
            max.textContent = 'Maximum Temperature: ' + data.forecast.max_temp
            humidity.textContent = 'Humidity: ' + data.forecast.humidity + '%'
        }
    })
})
})