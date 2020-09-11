# Weather App

The weather App uses an express server that connects to mapbox.com and weatherstack.com API's to display the current weather data on the searched location, using a minimalistic frontend.

On its implementation I have used asynchronous Node.js, ES6 javascript features and notation, http request to an express server and simple html and css, using hbs views to reuse some of the frontend components. 

I deployed the application at [Heroku](https://guivipom-weather-application.herokuapp.com/) so it can be tested without downloading the code

## Installation

As a prerequisite you will need to download and install [git](https://git-scm.com/downloads) and [Node.js](https://git-scm.com/downloads) if you don't have them already. After that you can clone the repository, go into the weather-app folder and execute the next command to install all the necessary dependencies. 

```bash
npm install
```

## Usage

To start the server:

```bash
npm run start
```

And go to http://localhost:3001/ to access the app.

## License
[MIT](https://choosealicense.com/licenses/mit/)

