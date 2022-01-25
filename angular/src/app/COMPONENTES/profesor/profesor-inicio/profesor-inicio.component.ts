import { Component, OnInit } from '@angular/core';
import{ CmsService, datosProfesor} from '../../../SERVICES/cms.service';
import{Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-profesor-inicio',
  templateUrl: './profesor-inicio.component.html',
  styleUrls: ['./profesor-inicio.component.scss']
})
export class ProfesorInicioComponent implements OnInit {
  public photoSelected: string | ArrayBuffer|null;
  public errores=[];
  public file: File;

  use:datosProfesor={
  nombre:'',
  apellido_paterno:'',
  apellido_materno:'',
  ci:'',
  celular:'',
  correo_electronico:'',
  genero:'',
  imagen:'',
  materia:'',
  especialidad:'',
  curso:'',
  paralelo:'',
  grado:'',
  }
 
 //VARIABLES
 ListarProfesor:datosProfesor[];

 constructor(private cmsService:CmsService, private router:Router) {
  }

 ngOnInit(): void {
   this.listarProfesor();

 }


 listarProfesor(){
   this.cmsService.getProfesor().subscribe(
     res=>{
       this.ListarProfesor=<any>res;
     },
     err=>console.log(err)

   );
 }

 eliminar(id:string){
   this.cmsService.deleteProfesor(id).subscribe(
     res=>{
       console.log('Profesor Eliminado');
       this.listarProfesor();
     },
     err=>console.log(err)

   );
 }

 agregar(){
  this.cmsService.addProfesor(this.use).subscribe(
    res=>{
      this.errores=<any>res
      
        this.listarProfesor();
      
       // this.router.navigate(['/listarProfesor']);
     
      
     // this.router.navigate(['/listarProfesor/']);
    },
    err=>console.log(err)

  );
  
}
 modificar(id:string){
   this.router.navigate(['/edit/'+id]);
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

 limpiarfoto(){
  
  this.use.imagen='';
  this.photoSelected='';
   this.use.nombre='';
   this.use.apellido_paterno='';
   this.use.apellido_materno='';
   this.use.ci='';
   this.use.celular='';
   this.use.correo_electronico='';
   this.use.genero='';
   this.use.materia='';
   this.use. especialidad='';
   this.use.curso='';
   this.use.paralelo='';
   this.use. grado='';
 }
}
