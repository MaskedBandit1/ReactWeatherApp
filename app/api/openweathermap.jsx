var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=1022c6516d926c0f474660a715ce6112&units=imperial';

// api key: 1022c6516d926c0f474660a715ce6112

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;


    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }
      else {
        return res.data.main.temp;
      }
    }, function(res){
        throw new Error(res.data.message);
    });
  }
}
