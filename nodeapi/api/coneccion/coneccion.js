const{Client} = require('pg');

const opciones = {
    host: 'localhost',
    user:'postgres',
    password:'Area51./51',
    database:'cms'
};
const pgConeccion = new Client(opciones);
pgConeccion.connect( err=>{
    if(err){
        console.log('Error en la base de datos:',err);
        return;
    }else{
        console.log('Base de datos conectada');
    }
});


module.exports = pgConeccion;