import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{datosAviso,datosAvisoEdit,AvisoService} from '../../../SERVICES/aviso.service'
@Component({
  selector: 'app-listar-aviso',
  templateUrl: './listar-aviso.component.html',
  styleUrls: ['./listar-aviso.component.scss']
})
export class ListarAvisoComponent implements OnInit {
  use:datosAviso={
    id:'',
    id_pagina:'',
    nombre:'',
    descripcion:'',
    fecha:'',
    hora:'',
  }
  use2:datosAvisoEdit={
    id_pagina:'1',
    nombre:'',
    descripcion:'',
    fecha:'',
    hora:'',
  }
  public idd:string;
  ListarAviso:datosAviso[]
  ListarAviso2:datosAviso[]
  public errores=[];
  public showMe:Boolean=false;
  public page:number;
  public fecha = new Date();
  public fechafecha= this.fecha.getFullYear()+ '/' + ( this.fecha.getMonth() + 1 ) + '/' +this.fecha.getDate();
  public horahora=this.fecha.getHours() + ':' + this.fecha.getMinutes() + ':' + this.fecha.getSeconds();
  constructor(private router:Router,private AvisoService:AvisoService) { }

  ngOnInit(): void {
this.listarAviso();
  }
  mostrarOcultar(){
    this.showMe=!this.showMe
    this.listarAviso();
  }
  listarAviso(){
    this.AvisoService.getAvisos().subscribe(
      res=>{
        this.ListarAviso=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  modificarEditSelect(id:string){
    this.idd=id;
    this.AvisoService.getUnAviso(id).subscribe(
      res=>{
        this.ListarAviso2=<any>res;
      this.use2=this.ListarAviso2[0];
      this.use2.fecha= this.fechafecha;
      this.use2.hora=this.horahora;
      this.listarAviso();
      },
      err=>console.log(err)
  
    );
  }
  modificar(){
    this.AvisoService.putAviso(this.idd,this.use2).subscribe(
      res=>{
        this.errores=<any>res
        this.listarAviso();
      },
      err=>console.log(err)
  
    );
  }
  eliminarAviso(id:string){
    this.AvisoService.deleteAviso(id).subscribe(
      res=>{
        this.listarAviso();
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
    this.errores=[];
  }

}
