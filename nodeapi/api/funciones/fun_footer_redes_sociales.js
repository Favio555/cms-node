const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const validaciones=require('../validaciones/validaciones');
//OBTENER TODOS LAS PUBLICACIONES DEL REDES
async function mostrarRedes(req,res){
    const response=  await pgConeccion.query(`SELECT 
	re.id ,
	re.nombre,
	re.icono,
	re.enlace
   FROM footer fo
     JOIN redes re ON fo.id = re.id_footer`);
    res.json(response.rows);
};
//OBTENER UN REGISTRO DE MENU
async function mostrarUnregistrodeRedes(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`SELECT 
	re.id ,
	re.nombre,
	re.icono,
	re.enlace
   FROM footer fo
     JOIN redes re ON fo.id = re.id_footer WHERE re.id=$1`,[id]);
    res.json(response2.rows);
};

//INSERTAR  REGISTROS A REDES
async function insertarRedes(id_footer,nombre,icono,enlace){

    const response4 =await pgConeccion.query(`INSERT INTO redes (id_footer,nombre,icono,enlace)
    VALUES($1,$2,$3,$4) RETURNING id`,[id_footer,nombre,icono,enlace]);
    const {id} =response4.rows[0];
    return id;
};

//INSERTAR UN REGISTRO A REDES FUNCION PRINCIPAL
async function insertarUnregistroRedes(req,res){
    // validaciones.validacionInsertarProfesor(req.body);
    const{id_footer,nombre,icono,enlace} = req.body

    const id_redes= await insertarRedes(id_footer,nombre,icono,enlace);
   
        res.json({status: 'Red social Insertado'})
    
}

//ELIMINAR UN REGISTRO DE REDES
async function eliminarRegistroRedes(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`DELETE FROM redes WHERE id=$1`,[id]);
    
    res.json({status: 'Red social Eliminado'})
    
}

//MODIFICAR UN REGISTRO DE REDES
async function modificarRegistroRedes(req,res){
    const {id} = req.params;
    const{nombre,icono,enlace} = req.body
    const response2= await pgConeccion.query(`UPDATE redes SET nombre=$1, icono=$2,enlace=$3 WHERE id=$4`,[nombre,icono,enlace,id]);
    
    res.json({status: 'Red social Actualizado'})
    
}

module.exports={
    mostrarRedes,
    mostrarUnregistrodeRedes,
    insertarUnregistroRedes,
    eliminarRegistroRedes,
    modificarRegistroRedes,
};