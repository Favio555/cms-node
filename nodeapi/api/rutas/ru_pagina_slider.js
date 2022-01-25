const { Router, response } = require('express');
const express = require('express');
const app = require('../../app');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const fun =require('../funciones/fun_pagina_slider');
const token=require('../verificacion_token/verificacionToken');
const val=require('../middlewares/validacionesM');
const sch=require('../validaciones/validaciones');
//OBTENER TODAS LAS PUBLICACIONES 
router.get('/',fun.mostrarSlider);
//OBTENER UN REGISTRO  ,token.verifyToken
router.get('/:id',fun.mostrarUnregistroSlider);
// AGREGAR UN REGISTROS ,val.validacionAvisos(sch.schemaAvisos)
router.post('/',val.validacionSlider(sch.schemaSlider),fun.insertarUnregistroSlider);
//ELIMINAR UN REGISTRO 
router.delete('/:id',fun.eliminarRegistroSlider);
//MODIFICAR UN REGISTRO 
router.put('/:id',val.validacionSlider(sch.schemaSlider),fun.modificarRegistroSlider);

module.exports = router;