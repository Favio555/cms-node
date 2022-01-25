import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{datosBlog,BlogService} from '../../../SERVICES/blog.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-in-blog',
  templateUrl: './in-blog.component.html',
  styleUrls: ['./in-blog.component.scss']
})
export class InBlogComponent implements OnInit {
  use:datosBlog={
    id:'',
    id_pagina:'1',
    titulo:'',
    descripcion:'',
    imagen:'',
    fecha:'',
    hora:'',
  }
  ListarBlog:datosBlog[]
  public photoSelected: string | ArrayBuffer|null;
  public errores=[];
  public file: File;
  constructor(private router:Router,private BlogService:BlogService,config: NgbModalConfig,
    private modalService: NgbModal) {
      config.backdrop = 'static';
      config.keyboard = false; 
     }

  ngOnInit(): void {
    this.listarBlog();
  }
  openModal1(content:any) {
    this.modalService.open(content ,{ size: 'lg'});
  }
  //refrescar pagina
  reloadCurrentPage(){
    window.location.reload();
  }
  listarBlog(){
    this.BlogService.getBlog().subscribe(
      res=>{
        this.ListarBlog=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  anadirBlog(){
    this.BlogService.addBlog(this.use).subscribe(
      res=>{
        this.errores=<any>res
       
          this.listarBlog();
        
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
