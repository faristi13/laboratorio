
weatherStation = function () {

    return {
      
        temperature: getRandomInt(18, 32),
        relativeHumidity:getRandomInt(75, 85),
        precipitation:getRandomInt(5, 180),
        preciptatatioIntensity:getRandomInt(0, 3600),
        windSpeed:getRandomInt(0, 15),
        windDirection:getRandomInt(0, 360),
        solarRadiation:getRandomInt(0,6500),
        sunshineDuration:getRandomInt(50, 270)
       
    };
}

"","","precipitation","","","","solarRadiation","sunshineDuration"
getRandomState = function () {
    var valor = Math.floor(Math.random() * 2) ;
    return valor == 0 ? 'NORTH' : 'SOUTH';
}


getRandomInt = function (min, max) {
    var valor = Math.random() * (max - min)+ min;
    valor=valor.toFixed(2)
    if (valor < 10) {
        return '0' + valor;
    } else {
        return '' + valor;
    }
}


module.exports = weatherStation;
