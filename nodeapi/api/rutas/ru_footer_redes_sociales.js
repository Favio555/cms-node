const { Router, response } = require('express');
const express = require('express');
const app = require('../../app');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const fun =require('../funciones/fun_footer_redes_sociales');
const token=require('../verificacion_token/verificacionToken');
const val=require('../middlewares/validacionesM');
const sch=require('../validaciones/validaciones');
//OBTENER TODAS LAS PUBLICACIONES DE REDES
router.get('/',fun.mostrarRedes);
//OBTENER UN REGISTRO DE REDES
router.get('/:id',fun.mostrarUnregistrodeRedes);
// AGREGAR UN REGISTROS A REDES
router.post('/',val.validacionRedes(sch.schemaRedes),fun.insertarUnregistroRedes);
//ELIMINAR UN REGISTRO DE REDES
router.delete('/:id',fun.eliminarRegistroRedes);
//MODIFICAR UN REGISTRO DE REDES
router.put('/:id',val.validacionRedes(sch.schemaRedes),fun.modificarRegistroRedes);

module.exports = router;