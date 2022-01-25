const { Router, response } = require('express');
const express = require('express');
const app = require('../../app');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const fun =require('../funciones/fun_plantel_persona');
const token=require('../verificacion_token/verificacionToken');
const val=require('../middlewares/validacionesM');
const sch=require('../validaciones/validaciones');

//OBTENER TODOS REGISTROS DEL PLANTEL
router.get('/',token.verifyToken,fun.mostrarPlantel);
//OBTENER UN REGISTRO DEL PLANTEL
router.get('/:id',token.verifyToken,fun.mostrarUnregistrodePlantel);
// AGREGAR UN REGISTROS A PLANTEL
router.post('/',token.verifyToken,val.validacion(sch.schema2),fun.insertarUnregistroPlantel);
//ELIMINAR UN REGISTRO DE PLANTEL
router.delete('/:id',token.verifyToken,fun.eliminarAdministrativoPlantel);
//MODIFICAR UN REGISTRO DE PLANTEL
router.put('/:id',token.verifyToken,val.validacion(sch.schema2),fun.modificarRegistroPlantel);

module.exports = router;