const { Router, response } = require('express');
const express = require('express');
const app = require('../../app');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const fun =require('../funciones/fun_pagina_galeria');
const token=require('../verificacion_token/verificacionToken');
const val=require('../middlewares/validacionesM');
const sch=require('../validaciones/validaciones');

//OBTENER TODAS LAS PUBLICACIONES DE GALERIA
router.get('/',fun.mostrarGalerias);
//OBTENER UN REGISTRO DE GALERIA 
router.get('/:id',fun.mostrarUnregistroGaleria);
// AGREGAR UN REGISTROS A GALERIA
router.post('/',val.validacionGaleria(sch.schemaGaleria),fun.insertarUnregistroGaleria);
//ELIMINAR UN REGISTRO DE GALERIA
router.delete('/:id',fun.eliminarRegistroGaleria);
//MODIFICAR UN REGISTRO DE GALERIA
router.put('/:id',val.validacionGaleria(sch.schemaGaleria),fun.modificarRegistroGaleria);

module.exports = router;