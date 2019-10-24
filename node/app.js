var Kafka = require('node-rdkafka');

require('dotenv').config({
    path: './configuration.env'
})

const fs = require('fs');
fs.readFile('./credentials.json', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }

    // Invoke the next step here however you like
    // console.log(data); // Put all of the code here (not the best solution)
    consumeQueue(JSON.parse(data))
});

function consumeQueue(data) {

    const driver_options = {
        'client.id': 'kafka-nodejs-console-sample-consumer',
        'group.id': 'kafka-nodejs-console-sample-group',
        'metadata.broker.list': data.kafka_brokers_sasl,
        'security.protocol': 'sasl_ssl',
        'sasl.mechanisms': 'PLAIN',
        'sasl.username': data.user,
        'sasl.password': data.password,
        'broker.version.fallback': '0.10.0',
        'log.connection.close': false
    };


    var consumer = new Kafka.KafkaConsumer(driver_options, {});
    consumer
        .on('ready', function () {

            console.log("Conectado...\nesperando mensajes del topic:", process.env.TOPIC + "\n");
            consumer.subscribe([process.env.TOPIC]);

            // Consumir del tema consfigurado. Esto es lo que determina
            // el modo en el que estamos corriendo. Al no especificar una devolución de llamada (o al especificar
            // solo una devolución de llamada) recibimos mensajes tan pronto como estén disponibles.
            consumer.consume();
        })
        .on('data', function (data) {
            // salida de mensajes
            console.log(data.value.toString());
            console.log("\n");
        });

    // consumer.on('event.log', function (log) {
    //     console.log(log);
    // });

    consumer.on('event.error', function (err) {
        console.error('Error from consumer:' + JSON.stringify(err));
    });

    consumer.connect();
}