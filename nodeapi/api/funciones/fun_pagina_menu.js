const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
const validaciones=require('../validaciones/validaciones');
//OBTENER TODOS LAS PUBLICACIONES DEL MENU
async function mostrarMenu(req,res){
    const response=  await pgConeccion.query(`SELECT 
	me.id,me.color_fondo
   FROM pagina pag
     JOIN menu me ON pag.id = me.id_pagina`);
    res.json(response.rows);
};
//MODIFICAR UN REGISTRO DE MENU
async function modificarRegistroMenu(req,res){
    const {id} = req.params;
    const{color_fondo} = req.body
    const response2= await pgConeccion.query(`UPDATE menu SET color_fondo=$1 WHERE id=$2`,[color_fondo,id]);
    
    res.json({status: 'Menu  Actualizado'})
    
}

module.exports={
    mostrarMenu,

    modificarRegistroMenu,
};