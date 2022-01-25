const { Router, response } = require('express');
const express = require('express');
const app = require('../../app');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const fun =require('../funciones/fun_pagina_footer');
const token=require('../verificacion_token/verificacionToken');
const val=require('../middlewares/validacionesM');
const sch=require('../validaciones/validaciones');

//OBTENER TODAS LAS PUBLICACIONES DE FOOTER
router.get('/',fun.mostrarFooter);
//OBTENER UN REGISTRO DE FOOTER
router.get('/:id',fun.mostrarUnregistrodeFooter);
// AGREGAR UN REGISTROS A FOOTER
router.post('/',val.validacionFooter(sch.schemaFooter),fun.insertarUnregistroFooter);
//ELIMINAR UN REGISTRO DE FOOTER
router.delete('/:id',fun.eliminarRegistroFooter);
//MODIFICAR UN REGISTRO DE FOOTER
router.put('/:id',val.validacionFooter(sch.schemaFooter),fun.modificarRegistroFooter);

module.exports = router;