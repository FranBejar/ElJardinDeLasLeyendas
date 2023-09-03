# El Jardin de las Leyendas

El Jardin de las Leyendas es un proyecto de eCommerce que consiste en una Libreria que tiene a la venta una seleccion de libros de diferentes generos literarios

El eCommerce se desarrollo utilizando React Native

La fuente utilizada para la gran mayoria del proyecto es la libreria [Dancing Script](https://fonts.google.com/specimen/Dancing+Script) de Google Fonts

## Installation

En caso de querer utilizar el codigo se debe ejecutar el siguiente comando

```bash
git clone https://github.com/FranBejar/ElJardinDeLasLeyendas
```
Se recomienda tener la version de Node v18.14.2 que es la que se utilizo durante el desarrollo del proyecto

A su vez, debe tener npm ya instalado, ya que para poder ejecutar la aplicacion debe ejecutar el siguiente comando

```bash
npm start
```
A continuacion dejo un PasteBin con el listado de dependencias utilizadas:

[Dependencias del Proyecto](https://pastebin.com/sXavfi0c)

## Como Funciona

El eCommerce trabaja con el uso de diversos Componentes, Navegacion, Screens y SQLite (entre otros)

>Components -> Conjunto de Widgets creados para ser reutilizados en las diversas partes del eCommerce, los mas destacados son CartItem, MapPreview, ProductItem y Search

>Features -> Estos archivos contienen Estados Iniciales y Funciones para el funcionamiento de la App, existen en el proyecto 3 Features: cartSlice (funciones del carrito), shopSlice (funciones de la tienda) y userSlice (funciones de configuracion del usuario)

>Navigation -> Los archivos de esta carpeta se encargan de las funciones de Navegacion entre las diferentes pantallas de la Aplicacion

>Screens -> Son las diferentes pantallas que se encuentran en la Aplicacion, cada una de ellas llama a diferentes Components y Services que permiten al usuario ejecutar diferentes funciones de la App

>Services -> Archivos que se utilizaron para interactuar con la base de datos y los features de Camara y Location

>SQLite -> Conjunto de funciones que ejecutan queries SQL para el manejo de Sesiones, con el objetivo principal de conservar la sesion si se llega a cerrar y se quiere conservar la sesion previa

## Firebase

El eCommerce utiliza Cloud Firestore como base de datos, al igual que para los procesos de autenticacion

La interaccion con la Base de Datos se maneja con los Services y se inicializa y llama a la misma con el archivo firebaseConfig.js ubicado en la carpeta Database

## CoderHouse

Este proyecto fue creado durante el desarrollo de la comision 43850 del curso de [Desarrollo de Aplicaciones](https://www.coderhouse.com/online/desarrollo-aplicaciones) de Coderhouse