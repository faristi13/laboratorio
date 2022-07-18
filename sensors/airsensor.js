
airsensor = function () {

    return {
      
        pm10TSA: getRandomInt(30, 154),
        pm25TSA:getRandomInt(8, 37),
        pm1TSA:getRandomInt(5, 12),
        so2TSA:getRandomInt(60, 197),
        no2TSA:getRandomInt(30, 189),
        co2TSA:getRandomInt(1000, 10200),
        coTSA:getRandomInt(1000,10200),
        o3TSA:getRandomInt(50, 38)
       
    };
}


getRandomState = function () {
    var valor = Math.random() * 2 ;
    return valor == 0 ? 'OFF' : 'ON';
}


getRandomInt = function (min, max) {
    var valor = Math.random() * (max - min) + min;
    valor=valor.toFixed(2)
    if (valor < 10) {
        return '0' + valor;
    } else {
        return '' + valor;
    }
}


module.exports = airsensor;
