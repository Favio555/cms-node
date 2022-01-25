import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{VideoService,datosVideoEdit,datosVideo} from '../../../SERVICES/video.service'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-listar-video',
  templateUrl: './listar-video.component.html',
  styleUrls: ['./listar-video.component.scss']
})
export class ListarVideoComponent implements OnInit {
  use:datosVideo={
    id:'',
    id_pagina:'',
    nombre:'',
    descripcion:'',
    archivo:'',
    fecha:'',
    hora:'',
  }
  use2:datosVideoEdit={
    id_pagina:'1',
    nombre:'',
    descripcion:'',
    archivo:'',
    fecha:'',
    hora:'',
  }
  idd:string;
  ListarVideo:datosVideo[]
  ListarVideo2:datosVideo[]
  public errores=[];
  public fecha = new Date();
  public fechafecha= this.fecha.getFullYear()+ '/' + ( this.fecha.getMonth() + 1 ) + '/' +this.fecha.getDate();
  public horahora=this.fecha.getHours() + ':' + this.fecha.getMinutes() + ':' + this.fecha.getSeconds();
  public showMe:Boolean=false;
  public page:number;
  safeSrc: SafeResourceUrl;
  constructor( private router:Router,private videoService:VideoService,private sanitizer: DomSanitizer) {
   
   }

   cargar(ar:any){
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(ar);
   }

  ngOnInit(): void {
  }
  mostrarOcultar(){
    this.showMe=!this.showMe
    this.listarVideo();
  }
  listarVideo(){
    this.videoService.getVideos().subscribe(
      res=>{
        this.ListarVideo=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  modificarEditSelect(id:string){
    this.idd=id;
    this.videoService.getUnVideo(id).subscribe(
      res=>{
        this.ListarVideo2=<any>res;
      this.use2=this.ListarVideo2[0];
      this.use2.fecha= this.fechafecha;
      this.use2.hora=this.horahora;
      this.listarVideo();
      },
      err=>console.log(err)
  
    );
  }
  modificar(){
    this.videoService.putVideo(this.idd,this.use2).subscribe(
      res=>{
        this.errores=<any>res
        this.listarVideo();
      },
      err=>console.log(err)
  
    );
  }

  eliminarvideo(id:string){
    this.videoService.deleteVideo(id).subscribe(
      res=>{
        console.log(' Eliminado');
        this.listarVideo();
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
      this.use2.archivo='';
      this.errores=[];
    }

}
