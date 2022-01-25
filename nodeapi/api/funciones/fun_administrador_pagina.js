const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');
//OBTENER TODOS LAS PAGINAS
async function mostrarPagina(req,res){
    const response=  await pgConeccion.query(` SELECT pa.id,pa.nombre,pa.imagen
    FROM persona pe JOIN administrador ad ON pe.id = ad.id_persona 
                    JOIN pagina pa ON ad.id = pa.id_administrador`);
    res.json(response.rows);
};

//MODIFICAR PAGINA
async function modificarPagina(req,res){
    const {id} = req.params;
    const{nombre,imagen} = req.body
    const response2= await pgConeccion.query(`UPDATE pagina SET nombre=$1,imagen=$2 WHERE id=$3`,[nombre,imagen,id]);
    
    res.json({status: 'Pagina Actualizada'})
  
    
}


module.exports={
    mostrarPagina,
    modificarPagina,
};