import{Component, OnInit} from '@angular/core' 
import{ CmsService, datosProfesor } from '../../SERVICES/cms.service';
import{GaleriaService,datosgaleria,datosfoto}from '../../SERVICES/galeria.service';
import{Router} from '@angular/router';
import{datosSliderView,datosEnlaceView,BlogService} from '../../SERVICES/blog.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  use:datosSliderView={
    id:'',
    id_pagina:'',
    titulo:'',
    descripcion:'',
    imagen:'',
  
  }
  Listargaleria:datosgaleria[];
  Listarfoto:datosfoto[];
  Listarenlace:datosEnlaceView[];
  Listarslider:datosSliderView[];
  public page:number;
  
  constructor(private galeriaService:GaleriaService, private router:Router,private BlogService:BlogService) {
   }

  ngOnInit(): void {
    this.listarGaleria();
    this.listarFoto();
    this.listarEnlace();
    this.listarSlider();
  }
  listarEnlace(){
    this.BlogService.getEnlace().subscribe(
      res=>{
        this.Listarenlace=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  listarSlider(){
    this.BlogService.getSlider().subscribe(
      res=>{
        this.Listarslider=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  listarGaleria(){
    this.galeriaService.getGaleria().subscribe(
      res=>{
        this.Listargaleria=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  listarFoto(){
    this.galeriaService.getFotos().subscribe(
      res=>{
        this.Listarfoto=<any>res;
      },
      err=>console.log(err)
 
    );
  }
  
}


