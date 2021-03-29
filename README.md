# Prueba técnica Sanitas

## Antes de comenzar

- Clonamos el repositorio, accedemos al directorio y desde un terminal lanzamos el comando `npm i` (se requiere Node v12 o superior).

## Características de la app

Esta aplicación está hecha con Angular 11 e Ionic 5. Dispone de un formateador de código (Prettier) para mantener la consistencia entre los editores de código.

Cada uno de los componentes dispone de una suite de test desarrollados con el framework de testing Angular Testing Library (https://testing-library.com/docs/angular-testing-library/intro). Este framework nos proporciona una manera de probar los componentes sin entrar en el detalle de la implementación, de manera que interactuamos con los componentes tal y como lo haría el usuario.

Para desarrollar los test e2e he optado por utilizar Cypress. Este nos provee de herramientas para hacer los test e2e de manera muy intuitiva y de manera muy sencilla.

## Instrucciones

### Cómo ejecutar la aplicación

- Ejecutamos el comando `npm start`.
- Se abrirá una página web donde se podrá visualizar la aplicación.

### Cómo ejecutar los tests unitarios

- Ejecutamos el comando `npm test`.

### Cómo ejecutar los tests e2e

- Lanzamos la aplicación si no la tenemos ya lanzada en el puerto 8100.
- A continuación, ejecutamos el comando `npm run cypress:open`.
- Se abrirá una ventana con un listado de test, seleccionamos el que queramos lanzar y listo.
