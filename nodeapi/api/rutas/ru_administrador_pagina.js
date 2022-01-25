const { Router, response } = require('express');
const express = require('express');
const app = require('../../app');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const fun =require('../funciones/fun_administrador_pagina');
const token=require('../verificacion_token/verificacionToken');
const val=require('../middlewares/validacionesM');
const sch=require('../validaciones/validaciones');

//OBTENER TODOS LOS PAGINA
router.get('/',fun.mostrarPagina);
//MODIFICAR PAGINA ,val.validacion(sch.schema)
router.put('/:id',fun.modificarPagina);

module.exports = router;