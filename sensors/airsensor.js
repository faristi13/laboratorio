
airsensor = function () {

    return {
      
        pm10TSA: getRandomInt(0, 1000),
        pm25TSA:getRandomInt(0, 1000),
        pm1TSA:getRandomInt(0, 1000),
        so2TSA:getRandomInt(0, 20),
        no2TSA:getRandomInt(0, 20),
        co2TSA:getRandomInt(0, 5000),
        coTSA:getRandomInt(0,1000),
        o3TSA:getRandomInt(0, 20)
       
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