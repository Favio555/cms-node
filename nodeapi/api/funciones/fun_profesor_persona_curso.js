const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
//OBTENER TODOS LOS PROFESORES
async function mostrarProfesor(req,res){
    const response=  await pgConeccion.query(' SELECT pro.id, pe.nombre,pe.apellido_paterno,pe.apellido_materno,pe.ci,pe.celular,pe.correo_electronico,pe.genero,pe.imagen,pro.materia,pro.especialidad,c.curso,c.paralelo,c.grado FROM persona pe JOIN profesor pro ON pe.id = pro.id_persona JOIN curso c ON pro.id = c.id_profesor');
    res.json(response.rows);
};
//OBTENER UN PROFESOR
async function mostrarUnProfesor(req,res){
    const {id} = req.params;
    const response2= await pgConeccion.query(`SELECT pro.id, pe.nombre,pe.apellido_paterno,pe.apellido_materno,pe.ci,pe.celular,pe.correo_electronico,pe.genero,pe.imagen,pro.materia,pro.especialidad,c.curso,c.paralelo,c.grado  FROM persona pe JOIN profesor pro ON pe.id = pro.id_persona JOIN curso c ON pro.id = c.id_profesor WHERE pro.id=$1`,[id]);
    res.json(response2.rows);
};
//INSERTAR UNA PERSONA
async function insertarUnaPersona(nombre, apellido_paterno, apellido_materno, ci, celular, correo_electronico, genero,imagen){
        const response3 =await pgConeccion.query(`INSERT INTO persona(nombre, apellido_paterno, apellido_materno, ci, celular, correo_electronico, genero,imagen)
        VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id`,[nombre, apellido_paterno, apellido_materno, ci, celular, correo_electronico, genero,imagen]);
        const {id} =response3.rows[0];
        return id;
};
//INSERTAR PROFESOR
async function insertarProfesor(id_persona,materia,especialidad){

    const response4 =await pgConeccion.query(`INSERT INTO profesor(id_persona, materia, especialidad)
    VALUES($1,$2,$3) RETURNING id`,[id_persona, materia, especialidad]);
    const {id} =response4.rows[0];
    return id;
};
//INSERTAR CURSO
async function insertarCurso(id_profesor,curso,paralelo,grado){

    const response5 =await pgConeccion.query(`INSERT INTO curso(id_profesor, curso, paralelo, grado)
    VALUES($1,$2,$3,$4) RETURNING id`,[id_profesor, curso, paralelo, grado]);
    const {id} =response5.rows[0];
    return id;
};
//INSERTAR UN PROFESOR FUNCION PRINCIPAL
async function insertarUnProfesor(req,res){
    const{nombre, apellido_paterno, apellido_materno, ci, celular, correo_electronico, genero,imagen,materia,especialidad,curso,paralelo,grado} = req.body
   console.log(imagen,materia,especialidad,curso,paralelo,grado);
    const id_persona= await insertarUnaPersona(nombre, apellido_paterno, apellido_materno, ci, celular, correo_electronico, genero,imagen);
    const id_profesor= await insertarProfesor(id_persona,materia,especialidad);
    const id_curso= await insertarCurso(id_profesor,curso,paralelo,grado);
   
        res.json({status: 'Profesor Insertado'})
    
}

//SELECIONAR ID PERSONA
async function selecionaridPersona(idpro){
    const response7 =await pgConeccion.query(`SELECT id_persona FROM profesor WHERE id=$1  `,[idpro]);
    return response7.rows[0].id_persona;
};
//ELIMINAR PROFESOR
async function eliminarProfesor(req,res){
    const {id} = req.params;
    const idpersona= await selecionaridPersona(id);
    const response3= await pgConeccion.query(`DELETE FROM curso WHERE id_profesor=$1`,[id]);
    const response2= await pgConeccion.query(`DELETE FROM profesor WHERE id=$1`,[id]);
    const response6= await pgConeccion.query(`DELETE FROM persona WHERE id=$1`,[idpersona]);
    
    res.json({status: 'Profesor Eliminado'})
    
}

//MODIFICAR PROFESOR
async function modificarProfesor(req,res){
    const {id} = req.params;
    const{nombre, apellido_paterno, apellido_materno, ci, celular, correo_electronico, genero,imagen,materia,especialidad,curso,paralelo,grado} = req.body
    const idpersona= await selecionaridPersona(id);
    const response3= await pgConeccion.query(`UPDATE curso SET curso=$1,paralelo=$2,grado=$3 WHERE id_profesor=$4`,[curso,paralelo,grado,id]);
    const response2= await pgConeccion.query(`UPDATE profesor SET materia=$1,especialidad=$2 WHERE id=$3`,[materia,especialidad,id]);
    const response6= await pgConeccion.query(`UPDATE persona SET nombre=$1,apellido_paterno=$2, apellido_materno=$3, ci=$4, celular=$5, correo_electronico=$6, genero=$7,imagen=$8 
    WHERE id=$9`,[nombre, apellido_paterno, apellido_materno, ci, celular, correo_electronico, genero,imagen,idpersona]);
    
    res.json({status: 'Profesor Actualizado'})
    
}


module.exports={
    mostrarProfesor,
    mostrarUnProfesor,
    insertarUnProfesor,
    eliminarProfesor,
    modificarProfesor,
};