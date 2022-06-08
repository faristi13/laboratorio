
sensorlamp = function () {

    return {
        state: getRandomState(0, 2),
        luminosity: getRandomInt(0, 10),
        date: new Date()
    };
}


getRandomState = function (min, max) {
    var valor = Math.floor(Math.random() * (max - min)) + min;
    return valor == 0 ? 'off' : 'on';
}


getRandomInt = function (min, max) {
    var valor = Math.floor(Math.random() * (max - min)) + min;
    if (valor < 10) {
        return '0' + valor;
    } else {
        return '' + valor;
    }
}


module.exports = sensorlamp;