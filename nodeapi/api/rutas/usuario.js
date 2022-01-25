const express = require('express');
const router = express.Router();

const pgConeccion = require('../coneccion/coneccion');

const jwt = require('jsonwebtoken');


router.get('/', async (req,res)=>{
 const response= await pgConeccion.query('Select*from administrador');
    res.json(response.rows);
});

router.post('/login', async (req,res) => {
    const { usuario, contrasena } = req.body;
   const response= await pgConeccion.query('select usuario,nivel from administrador where usuario=$1 and contraseña=$2',
    [usuario, contrasena]);
    if(response.rows.length >0){
      let data = JSON.stringify(response.rows[0]);
      const token = jwt.sign(data, 'stil');
      res.json({token});
    }else{
      res.json('Usuario o clave incorrectos');
    }
  })
module.exports = router;