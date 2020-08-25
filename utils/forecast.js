const request = require('request')



const forecast = (latitude, longitude, callback ) =>{
    const urlWeather = 'http://api.weatherstack.com/current?access_key=63827da0b81ce731a2c3a79c74f8867f&query='+latitude+','+longitude

    request({url: urlWeather, json: true}, (error,response)=>{
        if(error){
            callback('Unable to connect to weather service!')

        } else if (response.body.error) {
            callback('Unable to find location')
        }
        else {
        callback(undefined, 'Its currently '+response.body.current.temperature+' degrees outside and the proability of rain is: '+response.body.current.precip*100 +'%' )
        }
    })
    }

module.exports = forecast