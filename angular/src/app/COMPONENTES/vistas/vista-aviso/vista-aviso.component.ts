import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{datosAviso,AvisoService} from '../../../SERVICES/aviso.service'

@Component({
  selector: 'app-vista-aviso',
  templateUrl: './vista-aviso.component.html',
  styleUrls: ['./vista-aviso.component.scss']
})
export class VistaAvisoComponent implements OnInit {

  
  ListarAviso:datosAviso[]
  constructor(private router:Router,private AvisoService:AvisoService) { }

  ngOnInit(): void {
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
}
