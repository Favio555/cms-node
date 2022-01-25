const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const validaciones=require('../validaciones/validaciones');
//OBTENER TODOS LAS PUBLICACIONES DE VIDEOS
async function mostrarVideos(req,res){
    const response=  await pgConeccion.query(`SELECT 
	vi.id ,
	vi.nombre,
	vi.descripcion,
	vi.archivo,
    vi.fecha,
    vi.hora
   FROM pagina pag
     JOIN video vi ON pag.id = vi.id_pagina`);
    res.json(response.rows);
};
//OBTENER UN REGISTRO DE VIDEO
async function mostrarUnregistroVideo(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`SELECT 
	vi.id ,
	vi.nombre,
	vi.descripcion,
	vi.archivo,
    vi.fecha,
    vi.hora
   FROM pagina pag
     JOIN video vi ON pag.id = vi.id_pagina WHERE vi.id=$1`,[id]);
    res.json(response2.rows);
};

//INSERTAR  REGISTROS A VIDEO
async function insertarVideo(id_pagina,nombre,descripcion,archivo){

    const response4 =await pgConeccion.query(`INSERT INTO video(id_pagina,nombre,descripcion,archivo)
    VALUES($1,$2,$3,$4) RETURNING id`,[id_pagina,nombre,descripcion,archivo]);
    const {id} =response4.rows[0];
    return id;
};

//INSERTAR UN REGISTRO A BLOG FUNCION PRINCIPAL
async function insertarUnregistroVideo(req,res){
    // validaciones.validacionInsertarProfesor(req.body);
    const{id_pagina,nombre,descripcion,archivo} = req.body

    const id_video= await insertarVideo(id_pagina,nombre,descripcion,archivo);
   
        res.json({status: 'Video Insertado',message:{id_video}})
    
}

//ELIMINAR UN REGISTRO DE VIDEO
async function eliminarRegistroVideo(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`DELETE FROM video WHERE id=$1`,[id]);
    
    res.json({status: 'Video Eliminado'})
    
}

//MODIFICAR UN REGISTRO DE VIDEO
async function modificarRegistroVideo(req,res){
    const {id} = req.params;
    const{nombre,descripcion,archivo,fecha,hora} = req.body
    const response2= await pgConeccion.query(`UPDATE video SET nombre=$1,descripcion=$2,archivo=$3,fecha=$4,hora=$5 WHERE id=$6`,[nombre,descripcion,archivo,fecha,hora,id]);
    
    res.json({status: 'Video Actualizado'})
    
}


module.exports={
    mostrarVideos,
    mostrarUnregistroVideo,
    insertarUnregistroVideo,
    eliminarRegistroVideo,
    modificarRegistroVideo,
};