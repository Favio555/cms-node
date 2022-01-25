const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const validaciones=require('../validaciones/validaciones');
//OBTENER TODOS LAS PUBLICACIONES DE AVISO
async function mostrarAvisos(req,res){
    const response=  await pgConeccion.query(`SELECT 
	avi.id,
	avi.nombre,
	avi.descripcion,
    avi.fecha,
    avi.hora
   FROM pagina pag
     JOIN aviso avi ON pag.id = avi.id_pagina`);
    res.json(response.rows);
};
//OBTENER UN REGISTRO DE AVISO
async function mostrarUnregistroAviso(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`SELECT 
	avi.id,
	avi.nombre,
	avi.descripcion,
    avi.fecha,
    avi.hora
   FROM pagina pag
     JOIN aviso avi ON pag.id = avi.id_pagina WHERE avi.id=$1`,[id]);
    res.json(response2.rows);
};

//INSERTAR  REGISTROS A AVISO
async function insertarAviso(id_pagina,nombre,descripcion){

    const response4 =await pgConeccion.query(`INSERT INTO aviso (id_pagina,nombre,descripcion)
    VALUES($1,$2,$3) RETURNING id`,[id_pagina,nombre,descripcion]);
    const {id} =response4.rows[0];
    return id;
};

//INSERTAR UN REGISTRO AVISO FUNCION PRINCIPAL
async function insertarUnregistroAviso(req,res){
    // validaciones.validacionInsertarProfesor(req.body);
    const{id_pagina,nombre,descripcion} = req.body

    const id_aviso= await insertarAviso(id_pagina,nombre,descripcion);
   
        res.json({status: 'Aviso Insertado'})
    
}

//ELIMINAR UN REGISTRO DE AVISO
async function eliminarRegistroAviso(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`DELETE FROM aviso WHERE id=$1`,[id]);
    
    res.json({status: 'Aviso Eliminado'})
    
}

//MODIFICAR UN REGISTRO DE AVISO
async function modificarRegistroAviso(req,res){
    const {id} = req.params;
    const{nombre,descripcion,fecha,hora} = req.body
    const response2= await pgConeccion.query(`UPDATE aviso SET nombre=$1,descripcion=$2,fecha=$3,hora=$4 WHERE id=$5`,[nombre,descripcion,fecha,hora,id]);
    
    res.json({status: 'Aviso Actualizado'})
    
}


module.exports={
    mostrarAvisos,
    mostrarUnregistroAviso,
    insertarUnregistroAviso,
    eliminarRegistroAviso,
    modificarRegistroAviso,
};