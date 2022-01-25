import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{datosAviso,AvisoService} from '../../../SERVICES/aviso.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-in-aviso',
  templateUrl: './in-aviso.component.html',
  styleUrls: ['./in-aviso.component.scss']
})
export class InAvisoComponent implements OnInit {

  use:datosAviso={
    id:'',
    id_pagina:'1',
    nombre:'',
    descripcion:'',
    fecha:'',
    hora:'',
  }
  ListarAviso:datosAviso[]
  public errores=[];
  constructor(private router:Router,private AvisoService:AvisoService,config: NgbModalConfig,
    private modalService: NgbModal) {
      config.backdrop = 'static';
      config.keyboard = false; 
     }

  ngOnInit(): void {
    this.listarAviso();
  }
  openModal1(content:any) {
    this.modalService.open(content ,{ size: 'lg'});
  }
  //refrescar pagina
  reloadCurrentPage(){
    window.location.reload();
  }
  listarAviso(){
    this.AvisoService.getAvisos().subscribe(
      res=>{
        this.ListarAviso=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  anadirAviso(){
    this.AvisoService.addAviso(this.use).subscribe(
      res=>{
        this.errores=<any>res
       
          this.listarAviso();
        
      },
      err=>console.log(err)
  
    );

  }

  limpiarFormulario(){
    this.use.nombre='';
    this.use.descripcion='';
    this.errores=[];
  }

}
