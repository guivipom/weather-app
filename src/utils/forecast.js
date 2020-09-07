const request = require('request')



const forecast = (latitude, longitude, callback ) =>{
    const urlWeather = 'http://api.weatherstack.com/current?access_key=63827da0b81ce731a2c3a79c74f8867f&query='+latitude+','+longitude

    request({url: urlWeather, json: true}, (error,{body})=>{
        if(error){
            callback('Unable to connect to weather service!')

        } else if (body.error) {
            callback('Unable to find location')
        }
        else {
            callback(undefined, body.current.weather_descriptions +' with a temperature of ' 
            +body.current.temperature+' degrees (feels like '+ body.current.feelslike +
             ') The probability of rain is '+body.current.precip*100 +'% and the wind speed is ' + 
             body.current.wind_speed +'km/h'  )        }
    })
    }

module.exports = forecast