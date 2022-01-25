

import { Component, OnInit } from '@angular/core';
import{ CmsService, datosProfesor} from '../../../SERVICES/cms.service';
import{Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vista-profesor',
  templateUrl: './vista-profesor.component.html',
  styleUrls: ['./vista-profesor.component.scss']
})
export class VistaProfesorComponent implements OnInit {
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

    ListarProfesor:datosProfesor[];
  constructor(private cmsService:CmsService, private router:Router,private sanitizer: DomSanitizer) {
    this.ListarProfesor=[];
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
  modificar(id:string){
    this.router.navigate(['/edit/'+id]);
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
}
