const { Router, response } = require('express');
const express = require('express');
const app = require('../../app');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const fun =require('../funciones/fun_pagina_enlace');
const token=require('../verificacion_token/verificacionToken');
const val=require('../middlewares/validacionesM');
const sch=require('../validaciones/validaciones');
//OBTENER TODAS LAS PUBLICACIONES 
router.get('/',fun.mostrarEnlace);
//OBTENER UN REGISTRO  ,token.verifyToken
router.get('/:id',fun.mostrarUnregistroEnlace);
// AGREGAR UN REGISTROS ,val.validacionAvisos(sch.schemaAvisos)
router.post('/',val.validacionEnlace(sch.schemaEnlace),fun.insertarUnregistroEnlace);
//ELIMINAR UN REGISTRO 
router.delete('/:id',fun.eliminarRegistroEnlace);
//MODIFICAR UN REGISTRO 
router.put('/:id',val.validacionEnlace(sch.schemaEnlace),fun.modificarRegistroEnlace);

module.exports = router;