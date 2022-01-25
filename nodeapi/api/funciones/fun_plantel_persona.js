const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const validaciones=require('../validaciones/validaciones');
//OBTENER TODOS REGISTROS DE PLANTEL
async function mostrarPlantel(req,res){
    const response=  await pgConeccion.query(`SELECT pla.id,pe.nombre,pe.apellido_paterno,pe.apellido_materno,pe.ci,pe.celular,pe.correo_electronico,pe.genero,pe.imagen,
    pla.cargo,
    pla.especialidad
    FROM persona pe JOIN plantel pla ON pe.id = pla.id_persona`);
    res.json(response.rows);
};
//OBTENER UN REGISTRO DE PLANTEL
async function mostrarUnregistrodePlantel(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`SELECT pla.id,pe.nombre,pe.apellido_paterno,pe.apellido_materno,pe.ci,pe.celular,pe.correo_electronico,pe.genero,pe.imagen,
    pla.cargo,
    pla.especialidad
    FROM persona pe JOIN plantel pla ON pe.id = pla.id_persona WHERE pla.id=$1`,[id]);
    res.json(response2.rows);
};
//INSERTAR UNA PERSONA
async function insertarUnaPersona(nombre, apellido_paterno, apellido_materno, ci, celular, correo_electronico, genero,imagen){
        const response3 =await pgConeccion.query(`INSERT INTO persona(nombre, apellido_paterno, apellido_materno, ci, celular, correo_electronico, genero,imagen)
        VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id`,[nombre, apellido_paterno, apellido_materno, ci, celular, correo_electronico, genero,imagen]);
        const {id} =response3.rows[0];
        return id;
};
//INSERTAR  REGISTROS A PLANTEL
async function insertarplantel(id_persona,cargo,especialidad){

    const response4 =await pgConeccion.query(`INSERT INTO plantel(id_persona, cargo, especialidad)
    VALUES($1,$2,$3) RETURNING id`,[id_persona, cargo, especialidad]);
    const {id} =response4.rows[0];
    return id;
};

//INSERTAR UN REGISTRO A PLANTEL FUNCION PRINCIPAL
async function insertarUnregistroPlantel(req,res){
    // validaciones.validacionInsertarProfesor(req.body);
    const{nombre, apellido_paterno, apellido_materno, ci, celular, correo_electronico, genero,imagen,cargo,especialidad,} = req.body

    const id_persona= await insertarUnaPersona(nombre, apellido_paterno, apellido_materno, ci, celular, correo_electronico, genero,imagen);
    const id_administrativo= await insertarplantel(id_persona,cargo,especialidad);
   
        res.json({status: 'Administrativo Insertado',message:{id_administrativo}})
    
}

//SELECIONAR ID PERSONA
async function selecionaridPersona(idpro){
    const response7 =await pgConeccion.query(`SELECT id_persona FROM plantel WHERE id=$1  `,[idpro]);
    return response7.rows[0].id_persona;
};
//ELIMINAR UN REGISTRO DE PLANTEL
async function eliminarAdministrativoPlantel(req,res){
    const {id} = req.params;
    const idpersona= await selecionaridPersona(id);
    const response2= await pgConeccion.query(`DELETE FROM plantel WHERE id=$1`,[id]);
    const response6= await pgConeccion.query(`DELETE FROM persona WHERE id=$1`,[idpersona]);
    
    res.json({status: 'Administrativo Eliminado'})
    
}

//MODIFICAR UN REGISTRO DE PLANTEL
async function modificarRegistroPlantel(req,res){
    const {id} = req.params;
    const{nombre, apellido_paterno, apellido_materno, ci, celular, correo_electronico, genero,imagen,cargo,especialidad} = req.body
    const idpersona= await selecionaridPersona(id);
    const response2= await pgConeccion.query(`UPDATE plantel SET cargo=$1,especialidad=$2 WHERE id=$3`,[cargo,especialidad,id]);
    const response6= await pgConeccion.query(`UPDATE persona SET nombre=$1,apellido_paterno=$2, apellido_materno=$3, ci=$4, celular=$5, correo_electronico=$6, genero=$7,imagen=$8 
    WHERE id=$9`,[nombre, apellido_paterno, apellido_materno, ci, celular, correo_electronico, genero,imagen,idpersona]);
    
    res.json({status: 'Administrativo Actualizado'})
    
}


module.exports={
    mostrarPlantel,
    mostrarUnregistrodePlantel,
    insertarUnregistroPlantel,
    eliminarAdministrativoPlantel,
    modificarRegistroPlantel,
};