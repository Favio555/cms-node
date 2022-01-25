const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const validaciones=require('../validaciones/validaciones');
//OBTENER TODOS LAS PUBLICACIONES
async function mostrarSlider(req,res){
    const response=  await pgConeccion.query(`SELECT 
	sli.id,
    sli.titulo,
    sli.descripcion,
    sli.imagen
   FROM pagina pag
     JOIN slider sli ON pag.id = sli.id_pagina`);
    res.json(response.rows);
};
//OBTENER UN REGISTRO 
async function mostrarUnregistroSlider(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`SELECT 
	sli.id,
    sli.titulo,
    sli.descripcion,
    sli.imagen
   FROM pagina pag
     JOIN slider sli ON pag.id = sli.id_pagina WHERE sli.id=$1`,[id]);
    res.json(response2.rows);
};

//INSERTAR  REGISTROS 
async function insertarAviso(id_pagina,titulo,descripcion,imagen){

    const response4 =await pgConeccion.query(`INSERT INTO slider (id_pagina,titulo,descripcion,imagen)
    VALUES($1,$2,$3,$4) RETURNING id`,[id_pagina,titulo,descripcion,imagen]);
    const {id} =response4.rows[0];
    return id;
};

//INSERTAR UN REGISTRO  FUNCION PRINCIPAL
async function insertarUnregistroSlider(req,res){
    // validaciones.validacionInsertarProfesor(req.body);
    const{id_pagina,titulo,descripcion,imagen} = req.body

    const id_aviso= await insertarAviso(id_pagina,titulo,descripcion,imagen);
   
        res.json({status: 'Slider Insertado'})
    
}

//ELIMINAR UN REGISTRO 
async function eliminarRegistroSlider(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`DELETE FROM slider WHERE id=$1`,[id]);
    
    res.json({status: 'Slider Eliminado'})
    
}

//MODIFICAR UN REGISTRO DE AVISO
async function modificarRegistroSlider(req,res){
    const {id} = req.params;
    const{titulo,descripcion,imagen} = req.body
    const response2= await pgConeccion.query(`UPDATE slider SET titulo=$1,descripcion=$2,imagen=$3 WHERE id=$4`,[titulo,descripcion,imagen,id]);
    
    res.json({status: 'Slider Actualizado'})
    
}


module.exports={
    mostrarSlider,
    mostrarUnregistroSlider,
    insertarUnregistroSlider,
    eliminarRegistroSlider,
    modificarRegistroSlider,
};