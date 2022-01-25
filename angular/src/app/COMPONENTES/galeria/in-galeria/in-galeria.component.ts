import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{GaleriaService,datosgaleria,datosfoto, anadirfoto}from '../../../SERVICES/galeria.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-in-galeria',
  templateUrl: './in-galeria.component.html',
  styleUrls: ['./in-galeria.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class InGaleriaComponent implements OnInit {

//añadir foto-----//
foto:datosfoto={
  id:'',
  id_galeria:'',
  imagen:'',
}
Listarfoto:datosfoto[];
public file: File;
public photoSelected: string | ArrayBuffer|null;
    an: anadirfoto={
    id_galeria:'',
    imagen:'',
  }

  listarFoto(){
    this.galeriaService.getFotos().subscribe(
      res=>{
        this.Listarfoto=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  //----------/////
  use:datosgaleria={
    id:'',
    id_pagina:'1',
    nombre:'',
    descripcion:'',
    categoria:'',
  }
 
  Listargaleria:datosgaleria[];

  public errores=[];

  constructor(private galeriaService:GaleriaService, private router:Router,config: NgbModalConfig,
     private modalService: NgbModal ,private modalService2: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false; 
  }
  // modal
  openModal1(content:any) {
    this.modalService.open(content);
  }
  openModal2(content2:any) {
    this.modalService2.open(content2 ,{ size: 'sm'});
  }
  //refrescar pagina
  reloadCurrentPage(){
    window.location.reload();
  }
  ngOnInit(): void {
    this.listarGaleria();
    this.limpiarFormulario();
  }

  listarGaleria(){
    this.galeriaService.getGaleria().subscribe(
      res=>{
        this.Listargaleria=<any>res;
      },
      err=>console.log(err)
 
    );
  }


  anadirGaleria(){
    this.galeriaService.addGaleria(this.use).subscribe(
      res=>{
        this.errores=<any>res
          this.listarGaleria();
        
      },
      err=>console.log(err)
  
    );

  }

  limpiarFormulario(){
    this.use.categoria='';
    this.use.nombre='';
    this.use.descripcion='';
    this.errores=[];
  }

  //agregar foto //
  anadirfoto(){
    this.galeriaService.addFoto(this.an).subscribe(
      res=>{
        this.errores=<any>res
          this.listarFoto();
       // this.router.navigate(['/listarProfesor/']);
      },
      err=>console.log(err)
  
    );

  }
  
  onPhotoSelected(event:any) {
    if (event.target.files && event.target.files[0]) {
     this.file = <File>event.target.files[0];
     
    this.an.imagen= event.target.files[0].name;
  
    // VISTA DE IMAGEN
    const reader = new FileReader();
    reader.onload = e => this.photoSelected = reader.result;
    reader.readAsDataURL(this.file);
   }
   }
  
   limpiarfoto(){
     this.an.imagen='';
     this.photoSelected='';
     this.errores=[];
   }
 

}