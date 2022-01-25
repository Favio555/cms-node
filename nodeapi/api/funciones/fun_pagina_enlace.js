const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const validaciones=require('../validaciones/validaciones');
//OBTENER TODOS LAS PUBLICACIONES DE ENLACE
async function mostrarEnlace(req,res){
    const response=  await pgConeccion.query(`SELECT 
	en.id,
	en.nombre,
	en.imagen,
    en.linkk
   FROM pagina pag
     JOIN enlace en ON pag.id = en.id_pagina`);
    res.json(response.rows);
};
//OBTENER UN REGISTRO DE ENLACE
async function mostrarUnregistroEnlace(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`SELECT 
	en.id,
	en.nombre,
	en.imagen,
    en.linkk
   FROM pagina pag
     JOIN enlace en ON pag.id = en.id_pagina WHERE en.id=$1`,[id]);
    res.json(response2.rows);
};

//INSERTAR  REGISTROS A AVISO
async function insertarEnlace(id_pagina,nombre,imagen,linkk){

    const response4 =await pgConeccion.query(`INSERT INTO enlace (id_pagina,nombre,imagen,linkk)
    VALUES($1,$2,$3,$4) RETURNING id`,[id_pagina,nombre,imagen,linkk]);
    const {id} =response4.rows[0];
    return id;
};

//INSERTAR UN REGISTRO AVISO FUNCION PRINCIPAL
async function insertarUnregistroEnlace(req,res){
    // validaciones.validacionInsertarProfesor(req.body);
    const{id_pagina,nombre,imagen,linkk} = req.body

    const id_aviso= await insertarEnlace(id_pagina,nombre,imagen,linkk);
   
        res.json({status: 'Enlace Insertado'})
    
}

//ELIMINAR UN REGISTRO DE AVISO
async function eliminarRegistroEnlace(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`DELETE FROM enlace WHERE id=$1`,[id]);
    
    res.json({status: 'Enlace Eliminado'})
    
}

//MODIFICAR UN REGISTRO DE AVISO
async function modificarRegistroEnlace(req,res){
    const {id} = req.params;
    const{nombre,imagen,linkk} = req.body
    const response2= await pgConeccion.query(`UPDATE enlace SET nombre=$1,imagen=$2,linkk=$3 WHERE id=$4`,[nombre,imagen,linkk,id]);
    
    res.json({status: 'Enlace Actualizado'})
    
}


module.exports={
    mostrarEnlace,
    mostrarUnregistroEnlace,
    insertarUnregistroEnlace,
    eliminarRegistroEnlace,
    modificarRegistroEnlace,
};