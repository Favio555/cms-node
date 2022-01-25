const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const validaciones=require('../validaciones/validaciones');
//OBTENER TODOS LAS PUBLICACIONES DEL BLOG
async function mostrarBlog(req,res){
    const response=  await pgConeccion.query(`SELECT 
	blo.id ,
	blo.titulo,
	blo.descripcion,
	blo.imagen,
    blo.fecha,
    blo.hora
   FROM pagina pag
     JOIN blog blo ON pag.id = blo.id_pagina`);
    res.json(response.rows);
};
//OBTENER UN REGISTRO DE BLOG
async function mostrarUnregistrodeBlog(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`SELECT 
	blo.id ,
	blo.titulo,
	blo.descripcion,
	blo.imagen,
    blo.fecha,
    blo.hora
   FROM pagina pag
     JOIN blog blo ON pag.id = blo.id_pagina WHERE blo.id=$1`,[id]);
    res.json(response2.rows);
};

//INSERTAR  REGISTROS A BLOG
async function insertarBlog(id_pagina,titulo,descripcion,imagen){

    const response4 =await pgConeccion.query(`INSERT INTO blog(id_pagina,titulo,descripcion,imagen)
    VALUES($1,$2,$3,$4) RETURNING id`,[id_pagina,titulo,descripcion,imagen]);
    const {id} =response4.rows[0];
    return id;
};

//INSERTAR UN REGISTRO A BLOG FUNCION PRINCIPAL
async function insertarUnregistroBlog(req,res){
    // validaciones.validacionInsertarProfesor(req.body);
    const{id_pagina,titulo,descripcion,imagen} = req.body

    const id_blog= await insertarBlog(id_pagina,titulo,descripcion,imagen);
   
        res.json({status: 'Publicacion Insertada',message:{id_blog}})
    
}

//ELIMINAR UN REGISTRO DE BLOG
async function eliminarRegistroBlog(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`DELETE FROM blog WHERE id=$1`,[id]);
    
    res.json({status: 'Publicacion Eliminada'})
    
}

//MODIFICAR UN REGISTRO DE PLANTEL
async function modificarRegistroBlog(req,res){
    const {id} = req.params;
    const{titulo,descripcion,imagen,fecha,hora} = req.body
    const response2= await pgConeccion.query(`UPDATE blog SET titulo=$1,descripcion=$2,imagen=$3,fecha=$4,hora=$5 WHERE id=$6`,[titulo,descripcion,imagen,fecha,hora,id]);
    
    res.json({status: 'publicacion  Actualizada'})
    
}


module.exports={
    mostrarBlog,
    mostrarUnregistrodeBlog,
    insertarUnregistroBlog,
    eliminarRegistroBlog,
    modificarRegistroBlog,
};