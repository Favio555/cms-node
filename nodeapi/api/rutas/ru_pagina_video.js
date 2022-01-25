const { Router, response } = require('express');
const express = require('express');
const app = require('../../app');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const fun =require('../funciones/fun_pagina_video');
const token=require('../verificacion_token/verificacionToken');
const val=require('../middlewares/validacionesM');
const sch=require('../validaciones/validaciones');
//OBTENER TODAS LAS PUBLICACIONES DEL VIDEO
router.get('/',fun.mostrarVideos);
//OBTENER UN REGISTRO DE VIDEO
router.get('/:id',fun.mostrarUnregistroVideo);
// AGREGAR UN REGISTROS A VIDEO
router.post('/',val.validacionVideos(sch.schemaVideos),fun.insertarUnregistroVideo);
//ELIMINAR UN REGISTRO DE VIDEO
router.delete('/:id',fun.eliminarRegistroVideo);
//MODIFICAR UN REGISTRO DE VIDEO
router.put('/:id',val.validacionVideos(sch.schemaVideos),fun.modificarRegistroVideo);

module.exports = router;