# Intro

Una pequeña aplicación de ejemplo realizada en Ionic 3 que contiene:

* Registro de usuarios en Firebase con email (Web y Android)
* Login y Logout con Firebase (Web y Android)
* Uso de cámara en dispositivos móviles (Solo Android)
* Elección de fotos desde la galería en dispositivos móviles (Solo Android)
* Geolocalización, muestra la posición del usuario y los restaurantes cercanos (Web y Android)

# Instalación

* Decargar el proyecto con `git clone https://github.com/IsaacYAGI/ionic-multiapp.git`
* Ingresar a la carpeta del proyecto con `cd ionic-multiapp`
* Ejecutar el comando `npm install`
* Crear el API Key de autenticación en Firebase. Se debe crear un proyecto nuevo, habilitar la autenticación con email y editar el archivo `src/environment.ts` con los datos requeridos.
```
export const firebaseConfig = {
  apiKey: '<your-key>', 
  authDomain: '<your-project-authdomain>', 
  databaseURL: '<your-database-URL>', 
  projectId: '<your-project-id>', 
  storageBucket: '<your-storage-bucket>', 
  messagingSenderId: '<your-messaging-sender-id>' 
};
```

Para pasos más detallados visitar [este link](https://www.youtube.com/watch?v=qKajGwYe4TI&index=11&list=PLYxzS__5yYQng-XnJhB21Jc7NW1OIaqct) con el tutorial.

* Generar un Apikey para mapas y modificar el import de la librería de google maps al final del archivo `src/index.html`, incluyendo tu Apikey en la URL. 

`<script src="http://maps.google.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places"></script> `

Para generar el Apikey puedes remitirte a la documentación de Google haciendo clic [aquí](https://developers.google.com/maps/documentation/javascript/get-api-key).

Por último:

* Ejecutar el comando `ionic serve` para correrlo en la Web.
* Ejecutar el comando `ionic cordova build android` para compilar el APK.
* Ejecutar el comando `ionic cordova run android --target=[IP]:[PUERTO]` para compilar el APK y lanzarlo al emulador.

# Creditos

Se siguieron los siguientes tutoriales para la elaboración de las diferentes partes de la app (¡muchas gracias! :smiley: ) 

* [Learn Ionic 3 From Scratch: Ionic 3 Tutorial 1](https://www.youtube.com/watch?v=JcEGTektejA&index=1&list=PLYxzS__5yYQng-XnJhB21Jc7NW1OIaqct) - La parte de autenticación comienza [aquí](https://www.youtube.com/watch?v=qKajGwYe4TI&index=11&list=PLYxzS__5yYQng-XnJhB21Jc7NW1OIaqct)
* [Ionic Native: Accessing iOS Photos and Android Gallery, Part I](https://blog.ionicframework.com/ionic-native-accessing-ios-photos-and-android-gallery-part-i/)
* [Ionic 3 - Create a Nearby Restaurants App with Geolocation Plugin ,Google Maps and Places API Part I](https://www.techiediaries.com/ionic-geolocation-google-maps-places-api/)
* [Ionic 3 - Create a Nearby Restaurants App with Geolocation Plugin ,Google Maps and Places API Part II](https://www.techiediaries.com/ionic-geolocation-google-maps-places-api-part-2/)
