const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=63827da0b81ce731a2c3a79c74f8867f&query=New York'

request({url: url},(error,response)=>{
    console.log(response)
})