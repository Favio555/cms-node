import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuDetalleService {

  
  url='cms/menu';
  url2='cms/detalle';
  url3='cms/pagina'
  constructor(private http: HttpClient) { }

  //GET MENU
  getMenu(){
    return this.http.get(this.url);
  }
  //GET PAGINA
  getPagina(){
    return this.http.get(this.url3);
  }
   //MODIFICAR pagina
   putPagina(id:string, datos:datosPaginaEdit){
    return this.http.put(this.url3+'/'+id, datos);
  }
  //MODIFICAR MENU
  putMenu(id:string, datos:datosmenuactualizar){
    return this.http.put(this.url+'/'+id, datos);
  }
  //DETALLE
   //GET 
   getDetalle(){
    return this.http.get(this.url2);
  }
  // Agregar
   addDetalle(detalle:datosdetalle){
    return this.http.post(this.url2,detalle);
  }
    //ELIMINAR 
    deleteDetalle(id:string){
      return this.http.delete(this.url2+'/'+id);
    }
}
export interface datosmenu{
  id?:string;
  color_fondo?:string;
 
}
export interface datosmenuactualizar{
  color_fondo?:string;
}
export interface datosdetalle{
  id?:string;
  id_menu?:string;
  nombre?:string;
  ruta?:string;
}
export interface datosPaginaEdit{
  nombre?:string;
  imagen?:string;
}
export interface datosPaginaVer{
  id?:string;
  nombre?:string;
  imagen?:string;
}