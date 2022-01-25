const { Router, response } = require('express');
const express = require('express');
const app = require('../../app');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const fun =require('../funciones/fun_pagina_menu');
const token=require('../verificacion_token/verificacionToken');

//OBTENER TODAS LAS PUBLICACIONES DE MENU
router.get('/',fun.mostrarMenu);
//MODIFICAR UN REGISTRO DE MENU
router.put('/:id',fun.modificarRegistroMenu);

module.exports = router;