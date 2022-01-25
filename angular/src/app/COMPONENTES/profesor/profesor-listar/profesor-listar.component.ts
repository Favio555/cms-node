import { Component, OnInit } from '@angular/core';
import{ CmsService,datosProfesorEdit, datosProfesor} from '../../../SERVICES/cms.service';
import{Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profesor-listar',
  templateUrl: './profesor-listar.component.html',
  styleUrls: ['./profesor-listar.component.scss']
})
export class ProfesorListarComponent implements OnInit {
  public photoSelected: string | ArrayBuffer|null;
  public errores=[];
  public file: File;
  idd:string;
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
    use2:datosProfesorEdit={
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
    public showMe:Boolean=false;
    public page:number;
    ListarProfesor:datosProfesor[];
    ListarProfesor2:datosProfesor[];
  constructor(private cmsService:CmsService, private router:Router,private sanitizer: DomSanitizer) {
    this.ListarProfesor=[];
   }

  ngOnInit(): void {
    this.listarProfesor();
  }
   //refrescar pagina
   reloadCurrentPage(){
    window.location.reload();
  }
  mostrarOcultar(){
    this.showMe=!this.showMe
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
  modificar(id:string){
    this.idd=id;
    this.cmsService.getUnProfesor(id).subscribe(
      res=>{
        this.ListarProfesor2=<any>res;
      this.use2=this.ListarProfesor2[0]
      this.listarProfesor();
      },
      err=>console.log(err)
  
    );
  }
  modificarGuardar(){
    this.cmsService.putProfesor(this.idd,this.use2).subscribe(
      res=>{
        this.errores=<any>res
        
        this.listarProfesor();
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

 limpiarfoto(){
  
  this.use2.imagen='';
  this.photoSelected='';
   this.use2.nombre='';
   this.use2.apellido_paterno='';
   this.use2.apellido_materno='';
   this.use2.ci='';
   this.use2.celular='';
   this.use2.correo_electronico='';
   this.use2.genero='';
   this.use2.materia='';
   this.use2. especialidad='';
   this.use2.curso='';
   this.use2.paralelo='';
   this.use2. grado='';
   this.errores=[];
 }
}
