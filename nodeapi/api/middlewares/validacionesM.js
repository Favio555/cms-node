const validacion =(schema)=>async(req,res,next)=>{
    const body=req.body;
    
    try{
        await schema.validate(body);
        return next();

    }catch(error){
        return res.json({message:error.message});
    }
};
const validacionGaleria =(schemaGaleria)=>async(req,res,next)=>{
    const body=req.body;
    
    try{
        await schemaGaleria.validate(body);
        return next();

    }catch(error){
        return res.json({message:error.message});
    }
};
const validacionFotos =(schemaFotos)=>async(req,res,next)=>{
    const body=req.body;
    
    try{
        await schemaFotos.validate(body);
        return next();

    }catch(error){
        return res.json({message:error.message});
    }
};
const validacionVideos =(schemaVideos)=>async(req,res,next)=>{
    const body=req.body;
    
    try{
        await schemaVideos.validate(body);
        return next();

    }catch(error){
        return res.json({message:error.message});
    }
};
const validacionAvisos =(schemaAvisos)=>async(req,res,next)=>{
    const body=req.body;
    
    try{
        await schemaAvisos.validate(body);
        return next();

    }catch(error){
        return res.json({message:error.message});
    }
};
const validacionBlog =( schemaBlog)=>async(req,res,next)=>{
    const body=req.body;
    
    try{
        await schemaBlog.validate(body);
        return next();

    }catch(error){
        return res.json({message:error.message});
    }
};
const validacionFooter =( schemaFooter)=>async(req,res,next)=>{
    const body=req.body;
    
    try{
        await schemaFooter.validate(body);
        return next();

    }catch(error){
        return res.json({message:error.message});
    }
};
const validacionRedes =( schemaRedes)=>async(req,res,next)=>{
    const body=req.body;
    
    try{
        await schemaRedes.validate(body);
        return next();

    }catch(error){
        return res.json({message:error.message});
    }
};
const validacionEnlace =( schemaEnlace)=>async(req,res,next)=>{
    const body=req.body;
    
    try{
        await schemaEnlace.validate(body);
        return next();

    }catch(error){
        return res.json({message:error.message});
    }
};
const validacionSlider =( schemaSlider)=>async(req,res,next)=>{
    const body=req.body;
    
    try{
        await schemaSlider.validate(body);
        return next();

    }catch(error){
        return res.json({message:error.message});
    }
};
module.exports={
    validacion,
    validacionGaleria,
    validacionFotos,
    validacionVideos,
    validacionAvisos,
    validacionBlog,
    validacionFooter,
    validacionRedes,
    validacionSlider,
    validacionEnlace,
};