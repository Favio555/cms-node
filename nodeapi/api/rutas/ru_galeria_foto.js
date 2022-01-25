const { Router, response } = require('express');
const express = require('express');
const app = require('../../app');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const fun =require('../funciones/fun_galeria_foto');
const token=require('../verificacion_token/verificacionToken');
const val=require('../middlewares/validacionesM');
const sch=require('../validaciones/validaciones');
//OBTENER TODAS LAS PUBLICACIONES DE FOTOS
router.get('/',fun.mostrarFotos);
// AGREGAR UN REGISTROS A FOTO
router.post('/',val.validacionFotos(sch.schemaFotos),fun.insertarUnregistroFoto);
//ELIMINAR UN REGISTRO DE FOTO
router.delete('/:id',fun.eliminarRegistroFoto);

module.exports = router;