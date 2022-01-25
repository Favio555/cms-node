const { Router, response } = require('express');
const express = require('express');
const app = require('../../app');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const fun =require('../funciones/fun_pagina_aviso');
const token=require('../verificacion_token/verificacionToken');
const val=require('../middlewares/validacionesM');
const sch=require('../validaciones/validaciones');
//OBTENER TODAS LAS PUBLICACIONES DE AVISO
router.get('/',fun.mostrarAvisos);
//OBTENER UN REGISTRO DE AVISO  ,token.verifyToken
router.get('/:id',fun.mostrarUnregistroAviso);
// AGREGAR UN REGISTROS A AVISO
router.post('/',val.validacionAvisos(sch.schemaAvisos),fun.insertarUnregistroAviso);
//ELIMINAR UN REGISTRO DE AVISO
router.delete('/:id',fun.eliminarRegistroAviso);
//MODIFICAR UN REGISTRO DE AVISO
router.put('/:id',val.validacionAvisos(sch.schemaAvisos),fun.modificarRegistroAviso);

module.exports = router;