
# Event Streams para la aplicación de ejemplo de consola IBM Cloud Kafka Java

Esta aplicación de consola Java muestra cómo conectarse a [IBM Event Streams para IBM Cloud](https://cloud.ibm.com/docs/services/EventStreams?topic=eventstreams-getting_started).
Para enviar y recibir mensajes utilizando [Kafka] (https://kafka.apache.org) API de Java. 


__Nota importante__: Este ejemplo tiene por defecto un tema creado llamado "historicoclientes" en la clase 
"EventStreamsConsoleSample.java"

**prerrequisitos:**

-   git
-   Gradle
-   Java 8 o superior


## Ejecutando la aplicación

 - Clone el repositorio desde la línea de comandos o su cliente git.
 - Cuando se clona el repositorio, desde la línea de comando cambie al directorio `kafka-java-console-sample`.

Construya el contenido del directorio kafka-java-console-sample.

> gradle clean && gradle build

### **Ejecute la aplicación consumidora**

Inicie la aplicación consumidora desde la línea de comandos, reemplazando los valores `kafka_brokers_sasl` y `api_key`.

La ubicacion del archivo ".jar"  en donde se genera despues de construirse con gradle es`./build/libs/kafka-java-console-sample-2.0.jar` .


Use los valores `kafka_brokers_sasl` de las credenciales del Servicio  que se le han de otorgar.

>El `kafka_brokers_sasl` debe formatearse como "host: puerto, host2: puerto2". Formatee el contenido de `kafka_brokers_sasl` en un editor de texto antes de ingresarlo en la línea de comando.

Luego, use el valor de las credenciales del servicio `api_key` para  que el consumidor pueda  comenzar.

__ejemplos__:

>java -jar ./build/libs/kafka-java-console-sample-2.0.jar 
"host: puerto, host2: puerto2" "api_key" -consumer

__Nota:__
La aplicacion se ejecuta indefinidamente hasta que la detiene. Para detener el proceso, ejecute un comando de salida Ctrl + C