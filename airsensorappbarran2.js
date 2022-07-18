var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const chalk = require('chalk');
const mqtt = require('mqtt');
const { json } = require('express/lib/response');
var sensorlamp = require('./sensors/lampara');
var simulacion= require('./sensors/airsensor');



const log = console.log;



const host = '54.83.85.242'

//const host = '192.168.0.103'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: '',
  password: '',
  reconnectPeriod: 1000,
});



const topic = '/ul/4jggokgpepnvsb2uv4s40d59om/airSensor002/attrs'
client.on('connect', () => {
  console.log(chalk.red("Connected! Sendor lamp001"));

  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  });

  const testSteetLigth = setInterval(() => {
/*
    docker run -it --rm --name mqtt-publisher --network \
    fiware_default efrecon/mqtt-client pub -h mosquitto -m "c|1" \
    -t "/ul/4jggokgpepnvsb2uv4s40d59ov/motion001/attrs"
*/

    var testTempreture = {
      device_id: "lamp001",
      transport: "MQTT",
      entity_name: "urn:ngsi-ld:Lamp:001",
      data: sensorlamp()
    };

    
 
    dato=simulacion()
    datosEnviar="pm10TSA|"+dato.pm10TSA+"|pm25TSA|"+dato.pm25TSA+
    "|pm1TSA|"+dato.pm1TSA+"|so2TSA|"+dato.so2TSA+"|no2TSA|"+dato.no2TSA+"|co2TSA|"+dato.co2TSA+"|coTSA|"+dato.coTSA+"|o3TSA|"
    +dato.o3TSA
   
    client.publish(topic, datosEnviar, { qos: 0, retain: false }, (error) => {
      if (error) {
        console.error(error)
      }
    });
    console.clear();
    console.table(testTempreture);
    // log(`
    //     CPU: ${chalk.red('90%')}
    //     RAM: ${chalk.green('40%')}
    //     DISK: ${chalk.yellow('70%')}
    //  `);

  }, 1800000);




});
var listdata=[];


client.on('message', (topic, payload) => {
  console.log(chalk.blue('Received Sensor:'),chalk.yellow( topic));
  listdata.push(payload.toString());

});


module.exports = app;
