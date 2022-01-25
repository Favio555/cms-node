import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{datosFooterVista,datosRedesVista,FooterService}from '../../../SERVICES/footer.service';
import{datosPaginaVer,MenuDetalleService} from '../../../SERVICES/menu-detalle.service';
import{datosEnlaceEdit,datosEnlaceView,BlogService} from '../../../SERVICES/blog.service';
@Component({
  selector: 'app-vista-footer',
  templateUrl: './vista-footer.component.html',
  styleUrls: ['./vista-footer.component.scss']
})
export class VistaFooterComponent implements OnInit {
  use5:datosPaginaVer={
    id:'',
    nombre:'',
    imagen:'',
  }
  Listarfooter:datosFooterVista[];
  Listarenlace:datosEnlaceView[];
  Listarpagina:datosPaginaVer[];
  Listarredes:datosRedesVista[];
  public errores=[];
  constructor(private router:Router,
    private FooterService:FooterService,
    private MenuDetalleService:MenuDetalleService,
    private BlogService:BlogService) { }

  //menu
  ngOnInit(): void {
    this.listarFooter();
    this.listarRedes();
    this.listarpagina();
    this.listarEnlace();
  }
  listarFooter(){
    this.FooterService.getFooter().subscribe(
      res=>{
        this.Listarfooter=<any>res;
      },
      err=>console.log(err)
  
    );
  }
  listarRedes(){
    this.FooterService.getRedes().subscribe(
      res=>{
        this.Listarredes=<any>res;
        
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
listarEnlace(){
  this.BlogService.getEnlace().subscribe(
    res=>{
      this.Listarenlace=<any>res;
    },
    err=>console.log(err)

  );
}

}
