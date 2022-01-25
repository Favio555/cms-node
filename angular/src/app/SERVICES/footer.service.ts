import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FooterService {

  url='cms/footer';
  url2='cms/redes';
  constructor(private http: HttpClient) { }

  //GET FOOTER
  getFooter(){
    return this.http.get(this.url);
  }
   //GET REDES
   getRedes(){
    return this.http.get(this.url2);
  }
  //GET UN FOOTER
  
    getUnFooter(id:string){
      return this.http.get<object>(this.url+'/'+id);
    }
   //GET UNA RED
  
   getUnRed(id:string){
    return this.http.get<object>(this.url2+'/'+id);
  }
  //MODIFICAR FOOTER
  putFooter(id:string, footer:datosEdit){
    return this.http.put(this.url+'/'+id, footer);
  }
  //MODIFICAR REDES
  putRedes(id:string, redes:datosRedesEdit){
    return this.http.put(this.url2+'/'+id, redes);
  }
   //AGREGAR REDES
   addRed(add:datosRedesAdd){
    return this.http.post(this.url2,add);
  }
 

   //ELIMINAR Redes
  deleteRed(id:string){
    return this.http.delete(this.url2+'/'+id);
  }
}

export interface datosFooterVista{
  id?:string;
  color_texto?:string;
  color_fondo?:string;
  telefono?:string;
  descripcion?:string;
  correo?:string;
  direccion?:string;
}
export interface datosEdit{
  color_texto?:string;
  color_fondo?:string;
  telefono?:string;
  descripcion?:string;
  correo?:string;
  direccion?:string;
}
export interface datosRedesVista{
  id?:string;
  nombre?:string;
  icono?:string;
  enlace?:string;
}
export interface datosRedesEdit{
  nombre?:string;
  icono?:string;
  enlace?:string;
}
export interface datosRedesAdd{
  id_footer?:string;
  nombre?:string;
  icono?:string;
  enlace?:string;
}


