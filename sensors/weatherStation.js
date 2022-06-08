
weatherStation = function () {

    return {
      
        temperature: getRandomInt(0, 60),
        relativeHumidity:getRandomInt(25, 90),
        precipitation:getRandomInt(0, 10000),
        preciptatatioIntensity:getRandomInt(0, 300),
        windSpeed:getRandomInt(0, 20),
        windDirection:getRandomInt(0, 360),
        solarRadiation:getRandomInt(0,1800),
        sunshineDuration:getRandomInt(1000, 3000)
       
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