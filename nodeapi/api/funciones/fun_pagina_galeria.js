const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const validaciones=require('../validaciones/validaciones');
//OBTENER TODOS LAS PUBLICACIONES DE GALERIAS
async function mostrarGalerias(req,res){
    const response=  await pgConeccion.query(`SELECT 
	ga.id,
	ga.nombre,
    ga.descripcion,
	ga.categoria,
    ga.fecha,
    ga.hora
   FROM pagina pag
     JOIN galeria ga ON pag.id = ga.id_pagina`);
    res.json(response.rows);
};
//OBTENER UN REGISTRO DE GALERIA
async function mostrarUnregistroGaleria(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`SELECT 
	ga.id,
	ga.nombre,
    ga.descripcion,
	ga.categoria,
    ga.fecha,
    ga.hora
   FROM pagina pag
     JOIN galeria ga ON pag.id = ga.id_pagina WHERE ga.id=$1`,[id]);
    res.json(response2.rows);
};

//INSERTAR  REGISTROS A GALERIA
async function insertarGaleria(id_pagina,nombre,descripcion,categoria){

    const response4 =await pgConeccion.query(`INSERT INTO galeria (id_pagina,nombre,descripcion,categoria)
    VALUES($1,$2,$3,$4) RETURNING id`,[id_pagina,nombre,descripcion,categoria]);
    const {id} =response4.rows[0];
    return id;
};

//INSERTAR UN REGISTRO GALERIA FUNCION PRINCIPAL
async function insertarUnregistroGaleria(req,res){
    // validaciones.validacionInsertarProfesor(req.body);
    const{id_pagina,nombre,descripcion,categoria} = req.body

    const id_galeria= await insertarGaleria(id_pagina,nombre,descripcion,categoria);
   
        res.json({status: 'Galeria Insertado'})
    
}

//ELIMINAR UN REGISTRO DE GALERIA
async function eliminarRegistroGaleria(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`DELETE FROM galeria WHERE id=$1`,[id]);
    
    res.json({status: 'Galeria Eliminada'})
    
}

//MODIFICAR UN REGISTRO DE GALERIA
async function modificarRegistroGaleria(req,res){
    const {id} = req.params;
    const{nombre,descripcion,categoria,fecha,hora} = req.body
    const response2= await pgConeccion.query(`UPDATE galeria SET nombre=$1,descripcion=$2,categoria=$3,fecha=$4,hora=$5 WHERE id=$6`,[nombre,descripcion,categoria,fecha,hora,id]);
    
    res.json({status: 'Galeria Actualizada'})
    
}


module.exports={
    mostrarGalerias,
    mostrarUnregistroGaleria,
    insertarUnregistroGaleria,
    eliminarRegistroGaleria,
    modificarRegistroGaleria,
};