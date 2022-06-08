
sensorstreetlight = function () {

    return {
        powerState: getRandomState(),
        illuminanceLevel: getRandomInt(0, 600),
        powerFactor:getRandomInt(0, 3),
        frequency:getRandomInt(50, 60),
        powerSupplyCurrent:getRandomInt(100, 240),
        powerConsumption:getRandomInt(100, 240),
        luminaireSupplyVoltage:getRandomInt(80, 120),
    };
}


getRandomState = function () {
    var valor = Math.floor(Math.random() * 2) ;
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


module.exports = sensorstreetlight;