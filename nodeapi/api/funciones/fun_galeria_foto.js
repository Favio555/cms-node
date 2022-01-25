const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const validaciones=require('../validaciones/validaciones');
//OBTENER TODOS LAS PUBLICACIONES DE FOTOS
async function mostrarFotos(req,res){
    const response=  await pgConeccion.query(`SELECT 
	fo.id,
    fo.id_galeria,
	fo.imagen
   FROM galeria ga
   JOIN foto fo ON ga.id = fo.id_galeria`);
    res.json(response.rows);
};

//INSERTAR  REGISTROS A FOTO
async function insertarFoto(id_galeria,imagen){

    const response4 =await pgConeccion.query(`INSERT INTO foto (id_galeria,imagen)
    VALUES($1,$2) RETURNING id`,[id_galeria,imagen]);
    const {id} =response4.rows[0];
    return id;
};

//INSERTAR UN REGISTRO FOTO FUNCION PRINCIPAL
async function insertarUnregistroFoto(req,res){
    // validaciones.validacionInsertarProfesor(req.body);
    const{id_galeria,imagen} = req.body

    const id_foto= await insertarFoto(id_galeria,imagen);
   
        res.json({status: 'FOTO INSERTADO'})
    
}

//ELIMINAR UN REGISTRO DE FOTO
async function eliminarRegistroFoto(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`DELETE FROM foto WHERE id=$1`,[id]);
    
    res.json({status: 'FOTO ELIMINADO'})
    
}

module.exports={
    mostrarFotos,
    insertarUnregistroFoto,
    eliminarRegistroFoto,
};