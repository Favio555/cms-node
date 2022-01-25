import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{datosSliderEdit,datosSliderView,BlogService} from '../../../SERVICES/blog.service'
@Component({
  selector: 'app-listar-slider',
  templateUrl: './listar-slider.component.html',
  styleUrls: ['./listar-slider.component.scss']
})
export class ListarSliderComponent implements OnInit {

  use:datosSliderView={
    id:'',
    id_pagina:'',
    titulo:'',
    descripcion:'',
    imagen:'',
  
  }
  use2:datosSliderEdit={
    id_pagina:'1',
    titulo:'',
    descripcion:'',
    imagen:'',
  }
  Listarslider:datosSliderView[]
  Listarslider2:datosSliderView[]
  public photoSelected: string | ArrayBuffer|null;
  public errores=[];
  public file: File;
  public showMe:Boolean=false;
  public page:number;
  public idd:string;
  constructor(private router:Router,private BlogService:BlogService) { }

  ngOnInit(): void {
    this.listarSlider();
  }
  mostrarOcultar(){
    this.showMe=!this.showMe
    this.listarSlider();
  }
  listarSlider(){
    this.BlogService.getSlider().subscribe(
      res=>{
        this.Listarslider=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  modificarEditSelect(id:string){
    this.idd=id;
    this.BlogService.getUnSlider(id).subscribe(
      res=>{
        this.Listarslider2=<any>res;
      this.use2=this.Listarslider2[0];
      this.listarSlider();
      },
      err=>console.log(err)
  
    );
  }
  modificar(){
    this.BlogService.putSlider(this.idd,this.use2).subscribe(
      res=>{
        this.errores=<any>res
        this.listarSlider();
      },
      err=>console.log(err)
  
    );
  }

  eliminarSlider(id:string){
    this.BlogService.deleteSlider(id).subscribe(
      res=>{
        this.listarSlider();
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

