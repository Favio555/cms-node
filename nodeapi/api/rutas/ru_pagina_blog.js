const { Router, response } = require('express');
const express = require('express');
const app = require('../../app');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const fun =require('../funciones/fun_pagina_blog');
const token=require('../verificacion_token/verificacionToken');
const val=require('../middlewares/validacionesM');
const sch=require('../validaciones/validaciones');

//OBTENER TODAS LAS PUBLICACIONES DEL BLOG
router.get('/',fun.mostrarBlog);
//OBTENER UN REGISTRO DE BLOG
router.get('/:id',fun.mostrarUnregistrodeBlog);
// AGREGAR UN REGISTROS A BLOG
router.post('/',val.validacionBlog(sch.schemaBlog),fun.insertarUnregistroBlog);
//ELIMINAR UN REGISTRO DE PLANTEL
router.delete('/:id',fun.eliminarRegistroBlog);
//MODIFICAR UN REGISTRO DE PLANTEL
router.put('/:id',val.validacionBlog(sch.schemaBlog),fun.modificarRegistroBlog);

module.exports = router;