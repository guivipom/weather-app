
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()


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

    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    res.send({
        address: req.query.address,
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get('/products', (req, res)=>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products:[]
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

app.listen(3001, () => {
    console.log('Server is up on port 3001.')
})