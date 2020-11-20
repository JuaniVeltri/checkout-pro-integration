# Check out pro - nodeJS with handlebars

![Captura de Pantalla 2020-11-20 a la(s) 10 23 20](https://user-images.githubusercontent.com/35022704/99804910-7a8ae880-2b1a-11eb-8316-567b1dcf7fe2.png)

## Antes de comenzar

Requisitos para realizar la integración:

 - Cuenta en [Mercado Pago](www.mercadopago.com.ar)

## Correrlo localmente

 1. Realizar un fork de este proyecto cambiando el nombre de usuario de GitHub en  `username`, quedara:  [https://github.com/username/checkout-pro-integration](https://github.com/username/checkout-pro-integration)
 2. En la raíz del proyecto, ejecutar `npm install` para instalar las dependencias.
 3. Una vez instaladas las dependencias, reemplazar en el archivo `app.js` el `ACCESS_TOKEN` obtenido desde la pagina de [credenciales de Mercado Pago](https://www.mercadopago.com.ar/developers/panel/credentials):
 
 ```javascript
    mercadopago.configure({
	    access_token:  'ACCESS_TOKEN'
    });
```
    
    
    
4. Levantar el proyecto con `npm run start` y abrirlo en el puerto http://localhost:3000/
