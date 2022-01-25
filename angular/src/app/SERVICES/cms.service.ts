import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CmsService {
  url='cms/profesor';
  constructor(private http: HttpClient) { }

  //GET PROFESOR
  getProfesor(){
    return this.http.get(this.url);
  }
   //GET UN PROFESOR
   getUnProfesor(id:string){
    return this.http.get(this.url+'/'+id);
  }
  
   //AGREGAR PROFESOR
  addProfesor(profesor:datosProfesor){
    return this.http.post(this.url,profesor);
  }

   //ELIMINAR PROFESOR
  deleteProfesor(id:string){
    return this.http.delete(this.url+'/'+id);
  }
   //MODIFICAR PROFESOR
  putProfesor(id:string, profesor:datosProfesorEdit){
      return this.http.put(this.url+'/'+id, profesor);
  }
}

export interface datosProfesor{
  id?:string;
  nombre?:string;
  apellido_paterno?:string;
  apellido_materno?:string;
  ci?:string;
  celular?:string;
  correo_electronico?:string;
  genero?:string;
  imagen?:string;
  materia?:string;
  especialidad?:string;
  curso?:string;
  paralelo?:string;
  grado?:string;
}
export interface datosProfesorEdit{
  nombre?:string;
  apellido_paterno?:string;
  apellido_materno?:string;
  ci?:string;
  celular?:string;
  correo_electronico?:string;
  genero?:string;
  imagen?:string;
  materia?:string;
  especialidad?:string;
  curso?:string;
  paralelo?:string;
  grado?:string;
}


