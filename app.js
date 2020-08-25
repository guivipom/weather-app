const request = require('request')
const geocode = require('./utils/geocode')

const urlWeather = 'http://api.weatherstack.com/current?access_key=63827da0b81ce731a2c3a79c74f8867f&query=Berlin'

request({url: urlWeather, json: true}, (error,response)=>{
    if(error){
        console.log('Unable to connect to weather service!')

    } else if (response.body.error) {
        console.log('PUnable to find location')
    }
    else {
    console.log('Its currently '+response.body.current.temperature+' degrees outside and the proability of rain is: '+response.body.current.precip*100 +'%' )
    }
})





geocode('New york', (error, data)=> {
    console.log('Error', error)
    console.log('Data', data)
}) 