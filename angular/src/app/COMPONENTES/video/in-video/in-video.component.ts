import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{VideoService,datosVideo} from '../../../SERVICES/video.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-in-video',
  templateUrl: './in-video.component.html',
  styleUrls: ['./in-video.component.scss']
})
export class InVideoComponent implements OnInit {
  use:datosVideo={
    id:'',
    id_pagina:'1',
    nombre:'',
    descripcion:'',
    archivo:'',
    fecha:'',
    hora:'',
  }
  ListarVideo:datosVideo[]
  public errores=[];
  constructor(private router:Router,private videoService:VideoService,config: NgbModalConfig,
    private modalService: NgbModal) {
      config.backdrop = 'static';
      config.keyboard = false; 
     }

  ngOnInit(): void {
    this.listarVideo();
  }
  openModal1(content:any) {
    this.modalService.open(content ,{ size: 'lg'});
  }
  //refrescar pagina
  reloadCurrentPage(){
    window.location.reload();
  }
  listarVideo(){
    this.videoService.getVideos().subscribe(
      res=>{
        this.ListarVideo=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  anadirVideo(){
    this.videoService.addVideo(this.use).subscribe(
      res=>{
        this.errores=<any>res
       
          this.listarVideo();
        
      },
      err=>console.log(err)
  
    );

  }

  limpiarFormulario(){
    this.use.archivo='';
    this.use.nombre='';
    this.use.descripcion='';
    this.errores=[];
  }

}
