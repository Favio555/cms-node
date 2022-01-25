import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{GaleriaService,datosgaleria,datosfoto}from '../../../SERVICES/galeria.service';
@Component({
  selector: 'app-vista-galeria',
  templateUrl: './vista-galeria.component.html',
  styleUrls: ['./vista-galeria.component.scss']
})
export class VistaGaleriaComponent implements OnInit {
  Listargaleria:datosgaleria[];
  Listarfoto:datosfoto[];
  
  constructor(private galeriaService:GaleriaService, private router:Router) {
   }

  ngOnInit(): void {
    this.listarGaleria();
    this.listarFoto();
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
