
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express()
const port = process.env.PORT || 3001

const location = process.argv[2]


const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath))

app.get('', (req,res)=>{
    res.render('index', {
        title: 'Weather App',
        name: 'Guillermo'
    })
})

app.get('/about', (req,res)=>{
    res.render('about', {
        title: 'Weather App',
        name: 'Guillermo'
    })
})

app.get('/help', (req,res)=>{
    res.render('help', {
        helpMessage: 'This is the help message',
        title: 'Weather App',
        name: 'Guillermo'
    })
})


app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
    
    geocode(req.query.address, (error, {latitude, longitude, location_name} = {})=> {
        if(error){
            return res.send({error})
        }
        forecast(latitude, longitude, (error, dataForecast) =>{
            if(error){
                return res.send({error})
            }
            res.send({
                address: req.query.address,
                forecast: dataForecast,
                location: location_name
            })
        })
    })   
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        notFoundMessage: 'Help page not found',
        title: '404',
        name: 'Guillermo'
    })
})

app.get('/*', (req, res) => {
    res.render('404', {
        notFoundMessage: 'Page not found',
        title: '404',
        name: 'Guillermo'
    })})

app.listen(port, () => {
    console.log('Server is up on port 3001.')
})




 