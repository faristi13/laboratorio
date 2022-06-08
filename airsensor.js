
airsensor = function () {

    return {
      
        pm10TSA: getRandomInt(0, 1000),
        pm25TSA:getRandomInt(0, 1000),
        pm1TSA:getRandomInt(0, 1000),
        so2TSA:getRandomInt(0, 1000),
        no2TSA:getRandomInt(0, 1000),
        co2TSA:getRandomInt(0, 2000),
        coTSA:getRandomInt(0,2000),
        o3TSA:getRandomInt(1000, 3000)
       
    };
}


getRandomState = function () {
    var valor = Math.floor(Math.random() * 2) ;
    return valor == 0 ? 'OFF' : 'ON';
}


getRandomInt = function (min, max) {
    var valor = Math.floor(Math.random() * (max - min)) + min;
    if (valor < 10) {
        return '0' + valor;
    } else {
        return '' + valor;
    }
}


module.exports = airsensor;