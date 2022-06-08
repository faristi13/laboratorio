var simulacion= require('./sensors/lampara');
var simulacion2= require('./sensors/streetligth');
var simulacion3= require('./sensors/weatherStation');



dato=simulacion3()
console.log("temperature|"+dato.temperature+"|relativeHumidity|"+dato.relativeHumidity+
"|precipitation|"+dato.precipitation+"|preciptatatioIntensity|"+dato.preciptatatioIntensity+"|windSpeed|"+dato.windSpeed
+"|windDirection|"+dato.windDirection+"|solarRadiation|"+dato.solarRadiation+"|sunshineDuration|"
+dato.sunshineDuration)



dato=simulacion2()
console.log("luminaireSupplyVoltage|"+dato.luminaireSupplyVoltage+"|powerSupplyCurrent|"+dato.powerSupplyCurrent+
"|frequency|"+dato.frequency+"|powerConsumption|"+dato.powerConsumption+"|powerFactor|"+dato.powerFactor+"|illuminanceLevel|"+dato.illuminanceLevel+"|powerState|"
+dato.powerState)

var simulacion2= require('./sensors/airsensor');
dato2=simulacion2()
console.log("pm10TSA|"+dato2.pm10TSA+"|pm25TSA|"+dato2.pm25TSA+
"|pm1TSA|"+dato2.pm1TSA+"|so2TSA|"+dato2.so2TSA+"|no2TSA|"+dato2.no2TSA+"|co2TSA|"+dato2.co2TSA+"|coTSA|"+dato2.coTSA+"|o3TSA|"
+dato2.o3TSA)


//pm10TSA|10|pm25TSA|25|pm1TSA|1|so2TSA|12|no2TSA|11|co2TSA|9|coTSA|7|o3TSA|6
//luminaireSupplyVoltage|70|powerSupplyCurrent|70|frequency|70|powerConsumption|70|powerFactor|70|illuminanceLevel|70|powerState|ON