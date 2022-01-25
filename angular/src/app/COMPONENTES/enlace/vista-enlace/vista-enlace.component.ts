import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{datosEnlaceEdit,datosEnlaceView,BlogService} from '../../../SERVICES/blog.service'
@Component({
  selector: 'app-vista-enlace',
  templateUrl: './vista-enlace.component.html',
  styleUrls: ['./vista-enlace.component.scss']
})
export class VistaEnlaceComponent implements OnInit {

  use:datosEnlaceView={
    id:'',
    id_pagina:'',
    nombre:'',
    imagen:'',
    linkk:'',
  }
  use2:datosEnlaceEdit={
    id_pagina:'1',
    nombre:'',
    imagen:'',
    linkk:'',
  }
  Listarenlace:datosEnlaceView[]
  Listarenlace2:datosEnlaceView[]
  public photoSelected: string | ArrayBuffer|null;
  public errores=[];
  public file: File;
  public showMe:Boolean=false;
  public page:number;
  public idd:string;
  constructor(private router:Router,private BlogService:BlogService) { }

  ngOnInit(): void {
  this.listarEnlace();
  }
  mostrarOcultar(){
    this.showMe=!this.showMe
    this.listarEnlace();
  }
  listarEnlace(){
    this.BlogService.getEnlace().subscribe(
      res=>{
        this.Listarenlace=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  modificarEditSelect(id:string){
    this.idd=id;
    this.BlogService.getUnEnlace(id).subscribe(
      res=>{
        this.Listarenlace2=<any>res;
      this.use2=this.Listarenlace2[0];
      this.listarEnlace();
      },
      err=>console.log(err)
  
    );
  }
  modificar(){
    this.BlogService.putEnlace(this.idd,this.use2).subscribe(
      res=>{
        this.errores=<any>res
        this.listarEnlace();
      },
      err=>console.log(err)
  
    );
  }

  eliminarEnlace(id:string){
    this.BlogService.deleteEnlace(id).subscribe(
      res=>{
        this.listarEnlace();
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
        this.use2.linkk='';
        this.use2.imagen='';
        this.errores=[];
        this.photoSelected='';
      }
  
  //TRATAMIENTO DE IMAGENES
 
 onPhotoSelected(event:any) {
  if (event.target.files && event.target.files[0]) {
   this.file = <File>event.target.files[0];
   
  this.use2.imagen= event.target.files[0].name;

  // VISTA DE IMAGEN
  const reader = new FileReader();
  reader.onload = e => this.photoSelected = reader.result;
  reader.readAsDataURL(this.file);
 }
 }

}
