const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/be7896520fb78f0a3d8f0b0305536c14/${lat},${lng}`,
        json:true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        //    console.log(body.currently.temperature);
        }else{
            callback('Unable to fetch weather');
        }
    });
};

module.exports.getWeather = getWeather;
