

# kafka consumidor ejemplo
Se instalara la librería [node-rdkafka](https://github.com/Blizzard/node-rdkafka) para el consumo  de logs  en tiempo real.


## Pasos
Se debe instalar todas las dependencias como administrador de consola,ejemplo powershell como administrador.

Se ubica en la carpeta del proyecto y se instalan las siguientes dependencias

Nota: puede tardarse un poco.

> npm install --global --production windows-build-tools

Puede, que si se tenga la maquina des actualizada, se deba de reiniciar.

Luego de tener instalado esta dependencia correctamente, se ubicara en la raíz del proyecto y se instalaran las dependencias del proyecto

> npm install


## Configuración 

 1. Solicite la información  de credenciales para conectarse a la cola de kafka.
 2. solicite la información del nombre de la cola  de kafka a la que debe de conectarse.
 ---
 - una vez  obtenida la configuración de credenciales debe ingresar  el JSON de credenciales en el archivo "credentials.json"
 
 - una vez obtenida el nombre de la cola de kafka a la que quiera conectar se debe de agregar en el archivo "configuration.env" sin espacios.

Ejemplo:
TOPIC=ejemplo

## Ejecución
Para ejecutar la aplicación :

>npm start

ó

>node app.js


Para mas información sobre como realizar consumo , producir un mensaje diríjase a la documentación oficial de [node-rdkafka](https://github.com/Blizzard/node-rdkafka)