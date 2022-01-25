import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{datosmenu,datosmenuactualizar,datosPaginaEdit,datosPaginaVer,datosdetalle,MenuDetalleService} from '../../../SERVICES/menu-detalle.service'
@Component({
  selector: 'app-menu-horizontal',
  templateUrl: './menu-horizontal.component.html',
  styleUrls: ['./menu-horizontal.component.scss']
})
export class MenuHorizontalComponent implements OnInit {
  use:datosmenu={
    id:'',
    color_fondo:'',
  }
  use2:datosmenuactualizar={
    color_fondo:'',
  }
  use3:datosdetalle={
    id:'',
    id_menu:'1',
    nombre:'',
    ruta:'',
  }
  use4:datosPaginaEdit={
    nombre:'',
    imagen:'',
  }
  use5:datosPaginaVer={
    id:'',
    nombre:'',
    imagen:'',
  }
  limpiar(){
    this.use2.color_fondo='';
    this.use4.nombre='';
    this.use4.imagen='';
    this.errores=[];
    this.use3.nombre='';
    this.use3.ruta='';
    this.photoSelected='';
  }
 
  Listarmenu:datosmenu[];
  Listardetalle:datosdetalle[];
  Listarpagina:datosPaginaVer[];
  public photoSelected: string | ArrayBuffer|null;
  public errores=[];
  public file: File;
  constructor(private router:Router,private MenuDetalleService:MenuDetalleService) { }

  //menu
  ngOnInit(): void {
    this.listarmenu();
    this.listarDetalle();
    this.listarpagina();
      }
     //refrescar pagina
   reloadCurrentPage(){
    window.location.reload();
  }
//pagina--------------------------------------  
  listarpagina(){
    this.MenuDetalleService.getPagina().subscribe(
      res=>{
        this.Listarpagina=<any>res;
      },
      err=>console.log(err)
  
    );
  }
  modificarEditSelect(id:string){
    this.MenuDetalleService.putPagina(id,this.use4).subscribe(
      res=>{
        this.errores=<any>res
        
          this.listarpagina();
      },
      err=>console.log(err)
  
    );
  }
//-------------------------------------------------------------- 
  listarmenu(){
    this.MenuDetalleService.getMenu().subscribe(
      res=>{
        this.Listarmenu=<any>res;
      },
      err=>console.log(err)
  
    );
  }

  modificar(id:string){
    this.MenuDetalleService.putMenu(id,this.use2).subscribe(
      res=>{
        this.errores=<any>res
        
          this.listarmenu();
      },
      err=>console.log(err)
  
    );
  }
//------------------------------------
//DETALLE
listarDetalle(){
  this.MenuDetalleService.getDetalle().subscribe(
    res=>{
      this.Listardetalle=<any>res;
    },
    err=>console.log(err)

  );
}
eliminar(id:string){
  this.MenuDetalleService.deleteDetalle(id).subscribe(
    res=>{
      this.errores=<any>res
      this.listarDetalle();
    },
    err=>console.log(err)

  );
}
addDetalle(){
  this.MenuDetalleService.addDetalle(this.use3).subscribe(
    res=>{
      this.errores=<any>res
     
        this.listarDetalle();
      
    },
    err=>console.log(err)

  );

}
//-------------------------------------

 //TRATAMIENTO DE IMAGENES
 
 onPhotoSelected(event:any) {
  if (event.target.files && event.target.files[0]) {
   this.file = <File>event.target.files[0];
   
  this.use4.imagen= event.target.files[0].name;

  // VISTA DE IMAGEN
  const reader = new FileReader();
  reader.onload = e => this.photoSelected = reader.result;
  reader.readAsDataURL(this.file);
 }
 }

}
