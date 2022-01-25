const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');

const jwt = require('jsonwebtoken');

function verifyToken(req,res, next){
    if(!req.headers.authorization) return res.status(401).json('No autorizado');
  
    const token = req.headers.authorization;
    if(token!==''){
      const content = jwt.verify(token,'stil');
      req.data = content;
      next();
    }else{
      res.status(401).json('Token vacio');
    }
}
module.exports={
    verifyToken,
};