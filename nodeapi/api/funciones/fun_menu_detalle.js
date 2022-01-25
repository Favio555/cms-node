const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const validaciones=require('../validaciones/validaciones');
//OBTENER TODOS LAS PUBLICACIONES DEL DETALLE
async function mostrarDetalle(req,res){
    const response=  await pgConeccion.query(`SELECT 
	de.id ,
	de.nombre,
    de.ruta
   FROM menu me
     JOIN detalle de ON me.id = de.id_menu`);
    res.json(response.rows);
};
/*//OBTENER UN REGISTRO DE DETALLE
async function mostrarUnregistrodeDetalle(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`SELECT 
	de.id ,
	de.nombre
   FROM menu me
     JOIN detalle de ON me.id = de.id_menu WHERE de.id=$1`,[id]);
    res.json(response2.rows);
};*/

//INSERTAR  REGISTROS A DETALLE
async function insertarDetalle(id_menu,nombre,ruta){

    const response4 =await pgConeccion.query(`INSERT INTO detalle (id_menu,nombre,ruta)
    VALUES($1,$2,$3) RETURNING id`,[id_menu,nombre,ruta]);
    const {id} =response4.rows[0];
    return id;
};

//INSERTAR UN REGISTRO A DETALLE FUNCION PRINCIPAL
async function insertarUnregistroDetalle(req,res){
    // validaciones.validacionInsertarProfesor(req.body);
    const{id_menu,nombre,ruta} = req.body

    const id_detalle= await insertarDetalle(id_menu,nombre,ruta);
   
        res.json({status: 'Detalle Insertado',message:{id_detalle}})
    
}

//ELIMINAR UN REGISTRO DE DETALLE
async function eliminarRegistroDetalle(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`DELETE FROM detalle WHERE id=$1`,[id]);
    
    res.json({status: 'Detalle Eliminado'})
    
}

//MODIFICAR UN REGISTRO DE DETALLE
async function modificarRegistroDetalle(req,res){
    const {id} = req.params;
    const{nombre, ruta} = req.body
    const response2= await pgConeccion.query(`UPDATE detalle SET nombre=$1 ,ruta=$2 WHERE id=$3`,[nombre,ruta,id]);
    
    res.json({status: 'Detalle Actualizado'})
    
}

module.exports={
    mostrarDetalle,
 
    insertarUnregistroDetalle,
    eliminarRegistroDetalle,
    modificarRegistroDetalle,
};