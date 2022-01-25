import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {


  url='cms/blog';
  constructor(private http: HttpClient) { }

  //GET BLOG
  getBlog(){
    return this.http.get(this.url);
  }


   //AGREGAR  BLOG
  addBlog(blog:datosBlog){
    return this.http.post(this.url,blog);
  }
    //GET UN BLOG
    getUnBlog(id:string){
      return this.http.get(this.url+'/'+id);
    }
  
    //MODIFICAR BLOG
    putBlog(id:string, edit:datosBlogEdit){
      return this.http.put(this.url+'/'+id, edit);
  }
 

   //ELIMINAR  BLOG
  deleteBlog(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //enlace
  url2='cms/enlace';
   //GET 
   getEnlace(){
    return this.http.get(this.url2);
  }
   //AGREGAR  
  addEnlace(blog:datosEnlaceView){
    return this.http.post(this.url2,blog);
  }
    //GET UN 
    getUnEnlace(id:string){
      return this.http.get(this.url2+'/'+id);
    }
    //MODIFICAR 
    putEnlace(id:string, edit:datosEnlaceEdit){
      return this.http.put(this.url2+'/'+id, edit);
  }
     //ELIMINAR  
  deleteEnlace(id:string){
    return this.http.delete(this.url2+'/'+id);
  }

  //slider
  url3='cms/slider';
     //GET 
     getSlider(){
      return this.http.get(this.url3);
    }
     //AGREGAR  
    addSlider(blog:datosSliderView){
      return this.http.post(this.url3,blog);
    }
      //GET UN 
      getUnSlider(id:string){
        return this.http.get(this.url3+'/'+id);
      }
      //MODIFICAR 
      putSlider(id:string, edit:datosSliderEdit){
        return this.http.put(this.url3+'/'+id, edit);
    }
       //ELIMINAR  
    deleteSlider(id:string){
      return this.http.delete(this.url3+'/'+id);
    }
}
export interface datosBlog{
  id?:string;
  id_pagina?:string;
  titulo?:string;
  descripcion?:string;
  imagen?:string;
  fecha?:string;
  hora?:string;
}
export interface datosBlogEdit{
  id_pagina?:string;
  titulo?:string;
  descripcion?:string;
  imagen?:string;
  fecha?:string;
  hora?:string;
}

//enlace
export interface datosEnlaceView{
  id?:string;
  id_pagina?:string;
  nombre?:string;
  imagen?:string;
  linkk?:string;
  
}
export interface datosEnlaceEdit{
  id_pagina?:string;
  nombre?:string;
  imagen?:string;
  linkk?:string;
}
//slider
export interface datosSliderView{
  id?:string;
  id_pagina?:string;
  titulo?:string;
  descripcion?:string;
  imagen?:string;
}
export interface datosSliderEdit{
  id_pagina?:string;
  titulo?:string;
  descripcion?:string;
  imagen?:string;
}

