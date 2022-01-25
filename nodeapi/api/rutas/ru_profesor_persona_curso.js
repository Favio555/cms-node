const { Router, response } = require('express');
const express = require('express');
const app = require('../../app');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const fun =require('../funciones/fun_profesor_persona_curso');
const token=require('../verificacion_token/verificacionToken');
const val=require('../middlewares/validacionesM');
const sch=require('../validaciones/validaciones');

//OBTENER TODOS LOS PROFESORES
router.get('/',fun.mostrarProfesor);
//OBTENER UN PROFESOR
router.get('/:id',fun.mostrarUnProfesor);
// AGREGAR UN PROFESOR
router.post('/',val.validacion(sch.schema),fun.insertarUnProfesor);
//ELIMINAR PROFESOR
router.delete('/:id',fun.eliminarProfesor);
//MODIFICAR PROFESOR
router.put('/:id',val.validacion(sch.schema),fun.modificarProfesor);

module.exports = router;