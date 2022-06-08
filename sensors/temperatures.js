
sensortemp = function () {

    return {
        value: getRandomInt(0, 50),
        date: new Date()
    };
}


getRandomInt = function (min, max) {
    var valor= Math.floor(Math.random() * (max - min)) + min;
     if(valor<10){
         return '0'+valor;
     }else{
         return''+ valor;
     }
  //  return Math.floor(Math.random() * (max - min)) + min;
}


module.exports = sensortemp;