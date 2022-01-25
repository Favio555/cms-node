const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const validaciones=require('../validaciones/validaciones');
//OBTENER TODOS LAS PUBLICACIONES DEL FOOTER
async function mostrarFooter(req,res){
    const response=  await pgConeccion.query(`SELECT 
	fo.id,
    fo.color_texto,
	fo.color_fondo,
	fo.telefono,
    fo.descripcion,
	fo.correo,
    fo.direccion
   FROM pagina pag
     JOIN footer fo ON pag.id = fo.id_pagina`);
    res.json(response.rows);
};
//OBTENER UN REGISTRO DE FOOTER
async function mostrarUnregistrodeFooter(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`SELECT 
	fo.id,
    fo.color_texto,
	fo.color_fondo,
	fo.telefono,
    fo.descripcion,
	fo.correo,
    fo.direccion
   FROM pagina pag
     JOIN footer fo ON pag.id = fo.id_pagina WHERE fo.id=$1`,[id]);
    res.json(response2.rows);
};

//INSERTAR  REGISTROS A FOOTER
async function insertarFooter(id_pagina,color_texto,color_fondo,telefono,descripcion,correo,direccion){

    const response4 =await pgConeccion.query(`INSERT INTO footer (id_pagina,color_texto,color_fondo,telefono,descripcion,correo,direccion)
    VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING id`,[id_pagina,color_texto,color_fondo,telefono,descripcion,correo,direccion]);
    const {id} =response4.rows[0];
    return id;
};

//INSERTAR UN REGISTRO A FOOTER FUNCION PRINCIPAL
async function insertarUnregistroFooter(req,res){
    // validaciones.validacionInsertarProfesor(req.body);
    const{id_pagina,color_texto,color_fondo,telefono,descripcion,correo,direccion} = req.body

    const id_footer= await insertarFooter(id_pagina,color_texto,color_fondo,telefono,descripcion,correo,direccion);
   
        res.json({status: 'Footer Insertado',message:{id_footer}})
    
}

//ELIMINAR UN REGISTRO DE FOOTER
async function eliminarRegistroFooter(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`DELETE FROM footer WHERE id=$1`,[id]);
    
    res.json({status: 'Footer Eliminado'})
    
}

//MODIFICAR UN REGISTRO DE FOOTER
async function modificarRegistroFooter(req,res){
    const {id} = req.params;
    const{color_texto,color_fondo,telefono,descripcion,correo,direccion} = req.body
    const response2= await pgConeccion.query(`UPDATE footer SET color_texto=$1,color_fondo=$2,telefono=$3,descripcion=$4,correo=$5,direccion=$6 WHERE id=$7`,[color_texto,color_fondo,telefono,descripcion,correo,direccion,id]);
    
    res.json({status: 'Footer  Actualizado'})
    
}

module.exports={
    mostrarFooter,
    mostrarUnregistrodeFooter,
    insertarUnregistroFooter,
    eliminarRegistroFooter,
    modificarRegistroFooter,
};