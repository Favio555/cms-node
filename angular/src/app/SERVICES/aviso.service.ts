import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {


  url='cms/aviso';
  constructor(private http: HttpClient) { }

  //GET AVISOS
  getAvisos(){
    return this.http.get(this.url);
  }


   //AGREGAR AVISO
  addAviso(aviso:datosAviso){
    return this.http.post(this.url,aviso);
  }
  //GET UN AVISO
  getUnAviso(id:string){
    return this.http.get(this.url+'/'+id);
  }

  //MODIFICAR AVISO
  putAviso(id:string, edit:datosAvisoEdit){
    return this.http.put(this.url+'/'+id, edit);
}

   //ELIMINAR GALERIA
  deleteAviso(id:string){
    return this.http.delete(this.url+'/'+id);
  }
}
export interface datosAviso{
  id?:string;
  id_pagina?:string;
  nombre?:string;
  descripcion?:string;
  fecha?:string;
  hora?:string;
}
export interface datosAvisoEdit{
  id_pagina?:string;
  nombre?:string;
  descripcion?:string;
  fecha?:string;
  hora?:string;
}