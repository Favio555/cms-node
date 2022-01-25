import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{datosEnlaceEdit,datosEnlaceView,BlogService} from '../../../SERVICES/blog.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-in-enlace',
  templateUrl: './in-enlace.component.html',
  styleUrls: ['./in-enlace.component.scss']
})
export class InEnlaceComponent implements OnInit {

  use:datosEnlaceView={
    id:'',
    id_pagina:'1',
    nombre:'',
    imagen:'',
    linkk:'',
  }
  Listarenlace:datosEnlaceView[]
  public photoSelected: string | ArrayBuffer|null;
  public errores=[];
  public file: File;
  constructor(private router:Router,private BlogService:BlogService,config: NgbModalConfig,
    private modalService: NgbModal) {
      config.backdrop = 'static';
      config.keyboard = false; 
     }

  ngOnInit(): void {
    this.listarEnlace();
  }
  openModal1(content:any) {
    this.modalService.open(content ,{ size: 'lg'});
  }
  //refrescar pagina
  reloadCurrentPage(){
    window.location.reload();
  }
  listarEnlace(){
    this.BlogService.getEnlace().subscribe(
      res=>{
        this.Listarenlace=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  anadirEnlace(){
    this.BlogService.addEnlace(this.use).subscribe(
      res=>{
        this.errores=<any>res
        this.listarEnlace();
        
      },
      err=>console.log(err)
  
    );

  }

  limpiarFormulario(){
    this.use.nombre='';
    this.use.linkk='';
    this.use.imagen='';
    this.errores=[];
    this.photoSelected='';
  }

   //TRATAMIENTO DE IMAGENES
 
 onPhotoSelected(event:any) {
  if (event.target.files && event.target.files[0]) {
   this.file = <File>event.target.files[0];
   
  this.use.imagen= event.target.files[0].name;

  // VISTA DE IMAGEN
  const reader = new FileReader();
  reader.onload = e => this.photoSelected = reader.result;
  reader.readAsDataURL(this.file);
 }
 }
}