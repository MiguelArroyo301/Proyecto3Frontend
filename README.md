# Proyecto3Frontend

Este proyecto es una página web que muestra los datos más recientes de ozono y temperatura obtenidos de un servidor. La aplicación realiza una solicitud a una API para obtener los datos de un sensor que mide la concentración de ozono en el aire y la temperatura.

## Estructura del Proyecto

El proyecto se compone de los siguientes archivos:

- `paginamedidas1.html`: El archivo HTML que estructura la página donde se muestran los datos de los sensores.
- `paginamedidas1.css`: El archivo CSS que contiene los estilos para la página.
- `paginamedidas.js`: El archivo JavaScript que se encarga de realizar las solicitudes a la API, procesar los datos y actualizarlos en la página web.

## Funcionalidades

- Obtener los datos más recientes de temperatura y concentración de ozono de una API externa.
- Mostrar los valores de ozono y temperatura en tiempo real.
- Actualizar los datos automáticamente cada 5 segundos para que la información esté siempre actualizada.

## Requisitos Previos

Para ejecutar este proyecto, asegúrate de que tengas lo siguiente instalado:

- Un servidor web local (como `http-server`, `Express` o cualquier otro).
- Acceso a la API que devuelve los datos de los sensores (en este caso, está configurada para realizar peticiones a `http://localhost:13000/api/medidasmike/escribir`).

## Instrucciones para Ejecutar el Proyecto

1. **Clonar el repositorio**: Si es necesario, clona este repositorio en tu máquina local.
   ```bash
   git clone <URL-DEL-REPOSITORIO>
