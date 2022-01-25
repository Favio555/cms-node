import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  url='cms/video';
  constructor(private http: HttpClient) { }

  //GET VIDEOS
  getVideos(){
    return this.http.get(this.url);
  }
     //GET UN VIDEO
     getUnVideo(id:string){
      return this.http.get(this.url+'/'+id);
    }

     //MODIFICAR gALERIA
     putVideo(id:string, edit:datosVideoEdit){
      return this.http.put(this.url+'/'+id, edit);
  }


   //AGREGAR VIDEO
  addVideo(galeria:datosVideo){
    return this.http.post(this.url,galeria);
  }
 

   //ELIMINAR GALERIA
  deleteVideo(id:string){
    return this.http.delete(this.url+'/'+id);
  }

}
export interface datosVideo{
  id?:string;
  id_pagina?:string;
  nombre?:string;
  descripcion?:string;
  archivo?:string;
  fecha?:string;
  hora?:string;
}
export interface datosVideoEdit{
  id_pagina?:string;
  nombre?:string;
  descripcion?:string;
  archivo?:string;
  fecha?:string;
  hora?:string;
}

