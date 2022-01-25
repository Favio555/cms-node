import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{datosBlog,datosBlogEdit,BlogService} from '../../../SERVICES/blog.service'
@Component({
  selector: 'app-listar-blog',
  templateUrl: './listar-blog.component.html',
  styleUrls: ['./listar-blog.component.scss']
})
export class ListarBlogComponent implements OnInit {
  use:datosBlog={
    id:'',
    id_pagina:'',
    titulo:'',
    descripcion:'',
    imagen:'',
    fecha:'',
    hora:'',
  }
  use2:datosBlogEdit={
    id_pagina:'1',
    titulo:'',
    descripcion:'',
    imagen:'',
    fecha:'',
    hora:'',
  }
  ListarBlog:datosBlog[]
  ListarBlog2:datosBlog[]
  public photoSelected: string | ArrayBuffer|null;
  public errores=[];
  public file: File;
  public showMe:Boolean=false;
  public page:number;
  public idd:string;
  public fecha = new Date();
  public fechafecha= this.fecha.getFullYear()+ '/' + ( this.fecha.getMonth() + 1 ) + '/' +this.fecha.getDate();
  public horahora=this.fecha.getHours() + ':' + this.fecha.getMinutes() + ':' + this.fecha.getSeconds();
  constructor(private router:Router,private BlogService:BlogService) { }

  ngOnInit(): void {
  this.listarBlog();
  }
  mostrarOcultar(){
    this.showMe=!this.showMe
    this.listarBlog();
  }
  listarBlog(){
    this.BlogService.getBlog().subscribe(
      res=>{
        this.ListarBlog=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  modificarEditSelect(id:string){
    this.idd=id;
    this.BlogService.getUnBlog(id).subscribe(
      res=>{
        this.ListarBlog2=<any>res;
      this.use2=this.ListarBlog2[0];
      this.use2.fecha= this.fechafecha;
      this.use2.hora=this.horahora;
      this.listarBlog();
      },
      err=>console.log(err)
  
    );
  }
  modificar(){
    this.BlogService.putBlog(this.idd,this.use2).subscribe(
      res=>{
        this.errores=<any>res
        this.listarBlog();
      },
      err=>console.log(err)
  
    );
  }

  eliminarBlog(id:string){
    this.BlogService.deleteBlog(id).subscribe(
      res=>{
        console.log(' Eliminado');
        this.listarBlog();
      },
      err=>console.log(err)
 
    );
  }

      //refrescar pagina
      reloadCurrentPage(){
        window.location.reload();
      }
      limpiar(){
        this.use2.titulo='';
        this.use2.descripcion='';
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
