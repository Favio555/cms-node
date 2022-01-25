const express =require('express');
const app = express();
const bodyParser = require('body-parser');
//const cors = require('cors');
//const whitelist =['http://localhost:4200']
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//app.use(cors({origin:whitelist}));

//RUTAS
const rutaUsusario =  require('./api/rutas/usuario');
app.use('/cms',rutaUsusario);
//--
const rutaProfesor =  require('./api/rutas/ru_profesor_persona_curso');
app.use('/cms/profesor',rutaProfesor);
//--
const rutaPlantel =  require('./api/rutas/ru_plantel_persona');
app.use('/cms/plantel',rutaPlantel);
//--
const rutaBlog =  require('./api/rutas/ru_pagina_blog');
app.use('/cms/blog',rutaBlog);
//--
const rutaVideo =  require('./api/rutas/ru_pagina_video');
app.use('/cms/video',rutaVideo);
//--
const rutaAviso =  require('./api/rutas/ru_pagina_aviso');
app.use('/cms/aviso',rutaAviso);
//--
const rutaGaleria =  require('./api/rutas/ru_pagina_galeria');
app.use('/cms/galeria',rutaGaleria);
//--
const rutaFoto =  require('./api/rutas/ru_galeria_foto');
app.use('/cms/foto',rutaFoto);
//--
const rutaFooter =  require('./api/rutas/ru_pagina_footer');
app.use('/cms/footer',rutaFooter);
//--
const rutaMenu =  require('./api/rutas/ru_pagina_menu');
app.use('/cms/menu',rutaMenu);
//--
//const rutaDetalle =  require('./api/rutas/ru_pagina_menu');
//app.use('/cms/menu',rutaDetalle);
//--
const rutaRedes =  require('./api/rutas/ru_footer_redes_sociales');
app.use('/cms/redes',rutaRedes);
//--
const rutaDetalle =  require('./api/rutas/ru_menu_detalle');
app.use('/cms/detalle',rutaDetalle);

const rutaPagina =  require('./api/rutas/ru_administrador_pagina');
app.use('/cms/pagina',rutaPagina);

const rutaEnlace =  require('./api/rutas/ru_pagina_enlace');
app.use('/cms/enlace',rutaEnlace);

const rutaSlider =  require('./api/rutas/ru_pagina_slider');
app.use('/cms/slider',rutaSlider);


//ADMITIR TIPOS DE DATOS 
app.use(express.json())

module.exports = app;