const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=b977463b825605615dafb548f8361bac&units=metric'

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.cod !== 200) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                forecastData: body.weather[0].description.toUpperCase() + '. It is currently ' + body.main.temp + ' degrees out and it feels like ' + body.main.feels_like + ' degrees.',
                icon: 'http://openweathermap.org/img/w/' + body.weather[0].icon + '.png',
                min_temp: body.main.temp_min,
                max_temp: body.main.temp_max
            })
        }
    })
}


module.exports = forecast