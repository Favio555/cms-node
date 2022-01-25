import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  url='cms/galeria';
  urlfotos='cms/foto';
  constructor(private http: HttpClient) { }

  //GET GALERIA
  getGaleria(){
    return this.http.get(this.url);
  }
  getFotos(){
    return this.http.get(this.urlfotos);
  }
    //GET UN GALERIA
    getUnGaleria(id:string){
      return this.http.get(this.url+'/'+id);
    }

     //MODIFICAR gALERIA
     putGaleria(id:string, edit:datosgaleriaEdit){
      return this.http.put(this.url+'/'+id, edit);
  }

   //AGREGAR GALERIA
  addGaleria(galeria:datosgaleria){
    return this.http.post(this.url,galeria);
  }
  addFoto(foto:anadirfoto){
    return this.http.post(this.urlfotos,foto);
  }

   //ELIMINAR GALERIA
  deleteGaleria(id:string){
    return this.http.delete(this.url+'/'+id);
  }
  deletefoto(id:string){
    return this.http.delete(this.urlfotos+'/'+id);
  }
}

export interface datosgaleria{
  id?:string;
  id_pagina?:string;
  nombre?:string;
  descripcion?:string;
  categoria?:string;
  fecha?:string;
  hora?:string;
}
export interface datosgaleriaEdit{
  id_pagina?:string;
  nombre?:string;
  descripcion?:string;
  categoria?:string;
  fecha?:string;
  hora?:string;
}
export interface datosfoto{
  id?:any;
  id_galeria?:any;
  imagen?:any;
}

export interface anadirfoto{
  id_galeria?:string;
  imagen?:string;
}
