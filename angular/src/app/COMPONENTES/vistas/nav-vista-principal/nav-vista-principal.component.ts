import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{datosmenu,datosPaginaVer,datosdetalle,MenuDetalleService} from '../../../SERVICES/menu-detalle.service'

@Component({
  selector: 'app-nav-vista-principal',
  templateUrl: './nav-vista-principal.component.html',
  styleUrls: ['./nav-vista-principal.component.scss']
})
export class NavVistaPrincipalComponent implements OnInit {
  Listarmenu:datosmenu[];
  Listardetalle:datosdetalle[];
  Listarpagina:datosPaginaVer[];
  constructor(private router:Router,private MenuDetalleService:MenuDetalleService) { }
  //menu
  ngOnInit(): void {
    this.listarmenu();
    this.listarDetalle();
    this.listarpagina();
      }
 
  listarmenu(){
    this.MenuDetalleService.getMenu().subscribe(
      res=>{
        this.Listarmenu=<any>res;
      },
      err=>console.log(err)
  
    );
  }
  //DETALLE
listarDetalle(){
  this.MenuDetalleService.getDetalle().subscribe(
    res=>{
      this.Listardetalle=<any>res;
    },
    err=>console.log(err)

  );
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

}
