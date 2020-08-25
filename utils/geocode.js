const request = require('request')


const geocode = ( address, callback ) => {

    const urlMap = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +
                    ".json?access_token=pk.eyJ1IjoiZ3Vpdmlwb20iLCJhIjoiY2tlOGpseWV5MHd5dDJxbWl4ZzBpeWZnayJ9.SqK_vCAh-h2ccje_XQd07Q&limit=1"

    request ({url: urlMap, json: true}, (error, response) => {

        if (error) {
            callback('Unable to connect to location services!', undefined)
            } else if (response.body.features.length === 0) {
            callback( 'Unable to find location. Try another search.', undefined)
            } else {
             callback( undefined , {
                latitude: response.body.features[0].center[1] ,
                longitude: response.body.features[0].center[0] ,
                name: response.body.features[0].place_name
            })
        }
    }) 
}

module.exports = geocode