import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{GaleriaService,datosgaleriaEdit,datosgaleria,datosfoto}from '../../../SERVICES/galeria.service';
@Component({
  selector: 'app-listar-galeria',
  templateUrl: './listar-galeria.component.html',
  styleUrls: ['./listar-galeria.component.scss']
})
export class ListarGaleriaComponent implements OnInit {
  use:datosgaleria={
    id:'',
    id_pagina:'',
    nombre:'',
    descripcion:'',
    categoria:'',
  }
  use2:datosgaleriaEdit={
    id_pagina:'',
    nombre:'',
    descripcion:'',
    categoria:'',
    fecha:'',
    hora:'',
  }
  idd:string;
  Listargaleria:datosgaleria[];
  Listargaleria2:datosgaleria[];
  Listarfoto:datosfoto[];
  public errores=[];
  public fecha = new Date();
  public fechafecha= this.fecha.getFullYear()+ '/' + ( this.fecha.getMonth() + 1 ) + '/' +this.fecha.getDate();
  public horahora=this.fecha.getHours() + ':' + this.fecha.getMinutes() + ':' + this.fecha.getSeconds();
  public showMe:Boolean=false;
  public page: number;
  constructor(private galeriaService:GaleriaService, private router:Router) {
   }

  ngOnInit(): void {
    this.listarGaleria();
    this.listarFoto();
  }
mostrarOcultar(){
  this.showMe=!this.showMe
  this.listarGaleria();
}
  listarGaleria(){
    this.galeriaService.getGaleria().subscribe(
      res=>{
        this.Listargaleria=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  listarFoto(){
    this.galeriaService.getFotos().subscribe(
      res=>{
        this.Listarfoto=<any>res;
      },
      err=>console.log(err)
 
    );
  }

  modificarEditSelect(id:string){
    this.idd=id;
    this.galeriaService.getUnGaleria(id).subscribe(
      res=>{
        this.Listargaleria2=<any>res;
      this.use2=this.Listargaleria2[0];
      this.use2.fecha= this.fechafecha;
      this.use2.hora=this.horahora;
      this.listarGaleria();
      },
      err=>console.log(err)
  
    );
  }
  modificar(){
    this.galeriaService.putGaleria(this.idd,this.use2).subscribe(
      res=>{
        this.errores=<any>res
        this.listarGaleria();
      },
      err=>console.log(err)
  
    );
  }

  eliminarGaleria(id:string){
    this.galeriaService.deleteGaleria(id).subscribe(
      res=>{
        console.log(' Eliminado');
        this.listarGaleria();
      },
      err=>console.log(err)
 
    );
  }

  eliminarfoto(id:any){
    this.galeriaService.deletefoto(id).subscribe(
      res=>{
        console.log('foto Eliminado');
        this.listarFoto();
      },
      err=>console.log(err)
 
    );

  }
   //refrescar pagina
   reloadCurrentPage(){
    window.location.reload();
  }
  limpiar(){
    this.use2.nombre='';
    this.use2.descripcion='';
    this.use2.categoria='';
    this.errores=[];
  }


}