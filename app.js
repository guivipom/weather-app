const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(52.521, -13.385, (error, data) =>{
    console.log('Error', error)
    console.log('Data', data)
})

geocode('Berlin', (error, data)=> {
    console.log('Error', error)
    console.log('Data', data)
}) 
