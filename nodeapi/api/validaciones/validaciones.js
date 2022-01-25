const yup =require('yup');
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema=yup.object().shape({
    
  
    paralelo:yup.string('EL PARALELO NO PUEDE SER UN NUMERO').required('PARALELO ES REQUERIDO'),
    genero:yup.string().max(15,'EL GENERO ES MUY LARGO').required('EL GENERO ES REQUERIDO'),
   // imagen:yup.string('LA IMAGEN NO PUEDE SER UN NUMERO'),
    especialidad:yup.string().matches(/^[a-z ,.'-]+$/i,'INTRODUZCA UNA ESPECIALIDAD VALIDA').required('LA ESPECIALIDAD ES REQUERIDA'),
    materia:yup.string().matches(/^[a-z ,.'-]+$/i,'INTRODUZCA UNA MATERIA VALIDA').required('LA MATERIA ES REQUERIDA'),
    celular:yup.string().matches(phoneRegExp, 'EL NUMERO DE CELULAR NO ES VALIDO'),
    ci:yup.string().matches(phoneRegExp, 'EL CI NO ES VALIDO'),
    apellido_materno:yup.string().matches(/^[A-Za-z ]*$/, 'INTRODUZCA UN APELLIDO MATERNO VALIDO').max(50).required('EL APELLIDO MATERNO ES REQUERIDO'),
    apellido_paterno:yup.string().matches(/^[A-Za-z ]*$/, 'INTRODUZCA UN APELLIDO PATERNO VALIDO').max(50).required('EL APELLIDO PATERNO ES REQUERIDO'),
    correo_electronico:yup.string().matches(/\S+@\S+\.\S+/,'USE UN CORREO VALIDO').required('EL CORREO ES REQUERIDO'),
    nombre: yup.string().matches(/^[A-Za-z ]*$/, 'INTRODUZCA UN NOMBRE VALIDO').max(40).required('EL NOMBRE ES REQUERIDO'),
    //nombre:yup.string('EL NOMBRE NO PUEDE SER UN NUMERO').min(2,'EL NOMBRE ES MUY CORTO').matches(/^[a-z ,.'-]+$/i,'PARA NOMBRE SOLAMENTE USE LETRAS DE LA A-Z').required('EL NOMBRE ES REQUERIDO'),
    //curso:yup.string('EL CURSO NO PUEDE SER UN NUMERO').min(1,'EL CURSO ES MUY CORTO').required(),
    //paralelo:yup.string('EL PARALELO NO PUEDE SER UN NUMERO').max(1,'EL PARALELO ES MUY LARGO').matches(/^[a-z ,.'-]+$/i,'SOLAMENTE USE LETRAS DE LA A-Z').required(),
    //grado:yup.string('EL GRADO NO PUEDE SER UN NUMERO').max(15,'EL PARALELO ES MUY LARGO').matches(/^[a-z ,.'-]+$/i,'SOLAMENTE USE LETRAS DE LA A-Z').required(),
});
const schemaGaleria=yup.object().shape({  
    categoria:yup.string().max(50).required('LA CATEGORIA ES REQUERIDO'),
    descripcion:yup.string().max(200).required('LA DESCRIPCION ES REQUERIDO'),
    nombre: yup.string().max(100).required('EL NOMBRE ES REQUERIDO'),
});
const schemaFooter=yup.object().shape({  
    direccion:yup.string().max(200).required('LA DIRECCION ES REQUERIDO'),
    correo:yup.string().matches(/\S+@\S+\.\S+/,'USE UN CORREO VALIDO').required('EL CORREO ES REQUERIDO'),
    descripcion:yup.string().max(200).required('LA DESCRIPCION ES REQUERIDA'),
    telefono:yup.string().matches(phoneRegExp, 'EL NUMERO DE TELEFONO NO ES VALIDO').required('EL TELEFONO ES REQUERIDO'),
});
const schemaRedes=yup.object().shape({  
    enlace: yup.string().max(200).required('EL ENLACE ES REQUERIDO'),
    icono: yup.string().max(200).required('EL ICONO ES REQUERIDO'),
    nombre: yup.string().max(200).required('EL NOMBRE ES REQUERIDO'),
});
const schemaEnlace=yup.object().shape({  
    linkk: yup.string().max(200).required('EL ENLACE ES REQUERIDO'),
    imagen: yup.string().max(200).required('LA IMAGEN ES REQUERIDA'),
    nombre: yup.string().max(200).required('EL NOMBRE ES REQUERIDO'),
});
const schemaSlider=yup.object().shape({  
    imagen: yup.string().max(200).required('LA IMAGEN ES REQUERIDA'),
    descripcion: yup.string().max(200).required('LA DESCRIPCION ES REQUERIDA'),
    titulo: yup.string().max(200).required('EL TITULO ES REQUERIDO'),
});
const schemaFotos=yup.object().shape({  
    id_galeria:yup.string().required('LA SELECION DE GALERIA ES REQUERIDO'),
    imagen: yup.string().max(90).required('LA IMAGEN ES REQUERIDA'),
});
const schemaVideos=yup.object().shape({  
   //  archivo:yup.matches("(?:.+?)?(?:\/v\/|watch\/|\?v=|\&v=|youtu\.be\/|\/v=|^youtu\.be\/)([a-zA-Z0-9_-]{11})+",'INTRODUZCA UN ENLACE VALIDO').required('EL ARCHIVO  ES REQUERIDO'),
   archivo:yup.string().max(1000).required('EL ARCHIVO ES REQUERIDO'),
   descripcion:yup.string().max(200).required('LA DESCRIPCION ES REQUERIDO'),
     nombre:yup.string('EL NOMBRE NO PUEDE SER UN NUMERO').min(2,'EL NOMBRE ES MUY CORTO').matches(/^[a-z ,.'-]+$/i,'SOLAMENTE USE LETRAS DE LA A-Z').required('EL NOMBRE ES REQUERIDO'),
});
const schemaAvisos=yup.object().shape({  
    descripcion:yup.string().max(1000).required('LA DESCRIPCION ES REQUERIDO'),
    nombre: yup.string().max(100).required('EL NOMBRE ES REQUERIDO'),
 });
 const schemaBlog=yup.object().shape({  
    imagen: yup.string().max(90).required('LA IMAGEN ES REQUERIDA'),
    descripcion:yup.string().max(1000).required('LA DESCRIPCION ES REQUERIDO'),
    titulo: yup.string().max(200).required('EL TITULO ES REQUERIDO'),
 });
const schema2=yup.object().shape({
    nombre:yup.string('EL NOMBRE NO PUEDE SER UN NUMERO').min(2,'EL NOMBRE ES MUY CORTO').matches(/^[a-z ,.'-]+$/i,'SOLAMENTE USE LETRAS DE LA A-Z').required('EL NOMBRE ES REQUERIDO'),
    apellido_paterno:yup.string('EL APELLIDO SER UN NUMERO').min(2,'EL APELLIDO ES MUY CORTO').matches(/^[a-z ,.'-]+$/i,'SOLAMENTE USE LETRAS DE LA A-Z').required(),
    apellido_materno:yup.string('EL APELLIDO NO PUEDE SER UN NUMERO').min(2,'EL APELLIDO ES MUY CORTO').matches(/^[a-z ,.'-]+$/i,'SOLAMENTE USE LETRAS DE LA A-Z').required(),
    ci:yup.number('EL CI DEBE SER UN NUMERO').min(5,'EL CI ES MUY CORTO').integer('EL CI DEBE SER UN NUMERO ENTERO').required(),
    celular:yup.number('EL CELULAR DEBE SER UN NUMERO').min(7,'EL CELULAR DEBE TENER 7 DIGITOS').integer('EL CELULAR DEBE SER UN NUMERO ENTERO').required(),
    correo_electronico:yup.string('EL CORREO NO PUEDE SER UN NUMERO').matches(/\S+@\S+\.\S+/,'USE UN CORREO VALIDO').required(),
    genero:yup.string('EL GENERO NO PUEDE SER UN NUMERO').max(15,'EL GENERO ES MUY LARGO').required(),
    imagen:yup.string('LA IMAGEN NO PUEDE SER UN NUMERO').required(),
    cargo:yup.string('CARGO NO PUEDE SER UN NUMERO').min(2,'EL CARGO ES MUY CORTO').matches(/^[a-z ,.'-]+$/i,'SOLAMENTE USE LETRAS DE LA A-Z').required(),
    especialidad:yup.string('LA ESPECIALIDAD NO PUEDE SER UN NUMERO').min(5,'LA ESPECIALIDAD ES MUY CORTO').matches(/^[a-z ,.'-]+$/i,'SOLAMENTE USE LETRAS DE LA A-Z').required(),
   
});
module.exports={
schema,
schema2,
schemaGaleria,
schemaFotos,
schemaVideos,
schemaBlog,
schemaAvisos,
schemaFooter,
schemaRedes,
schemaEnlace,
schemaSlider,
};