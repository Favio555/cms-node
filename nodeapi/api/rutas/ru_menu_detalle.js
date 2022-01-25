const { Router, response } = require('express');
const express = require('express');
const app = require('../../app');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const fun =require('../funciones/fun_menu_detalle');
const token=require('../verificacion_token/verificacionToken');
//OBTENER TODAS LAS PUBLICACIONES DE DETALLE
router.get('/',fun.mostrarDetalle);
// AGREGAR UN REGISTROS A DETALLE
router.post('/',fun.insertarUnregistroDetalle);
//ELIMINAR UN REGISTRO DE DETALLE
router.delete('/:id',fun.eliminarRegistroDetalle);
//MODIFICAR UN REGISTRO DE  DETALLE
router.put('/:id',fun.modificarRegistroDetalle);

module.exports = router;