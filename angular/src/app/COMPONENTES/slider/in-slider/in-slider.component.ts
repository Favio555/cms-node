import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{datosSliderEdit,datosSliderView,BlogService} from '../../../SERVICES/blog.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-in-slider',
  templateUrl: './in-slider.component.html',
  styleUrls: ['./in-slider.component.scss']
})
export class InSliderComponent implements OnInit {

  use:datosSliderView={
    id:'',
    id_pagina:'1',
    titulo:'',
    descripcion:'',
    imagen:'',
  
  }
  Listarslider:datosSliderView[]
  public photoSelected: string | ArrayBuffer|null;
  public errores=[];
  public file: File;
  constructor(private router:Router,private BlogService:BlogService,config: NgbModalConfig,
    private modalService: NgbModal) {
      config.backdrop = 'static';
      config.keyboard = false; 
     }

  ngOnInit(): void {
    this.listarSlider();
  }
  openModal1(content:any) {
    this.modalService.open(content ,{ size: 'lg'});
  }
  //refrescar pagina
  reloadCurrentPage(){
    window.location.reload();
  }
  listarSlider(){
    this.BlogService.getSlider().subscribe(
      res=>{
        this.Listarslider=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  anadirSlider(){
    this.BlogService.addSlider(this.use).subscribe(
      res=>{
        this.errores=<any>res
        this.listarSlider();
        
      },
      err=>console.log(err)
  
    );

  }

  limpiarFormulario(){
    this.use.titulo='';
    this.use.descripcion='';
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
