import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{datosFooterVista,datosRedesVista,datosRedesAdd,datosRedesEdit,datosEdit,FooterService}from '../../../SERVICES/footer.service';
@Component({
  selector: 'app-listar-footer',
  templateUrl: './listar-footer.component.html',
  styleUrls: ['./listar-footer.component.scss']
})
export class ListarFooterComponent implements OnInit {

  use:datosFooterVista={
    id:'',
    color_texto:'',
    color_fondo:'',
    telefono:'',
    descripcion:'',
    correo:'',
    direccion:'',
  }
  use3:datosEdit={
    color_texto:'red',
    color_fondo:'red',
    telefono:'',
    descripcion:'',
    correo:'',
    direccion:'',
  }
  useRedes:datosRedesVista={
    id:'',
    nombre:'',
    icono:'',
    enlace:'',
  }
  useRedes2:datosRedesEdit={
    nombre:'',
    icono:'',
    enlace:'',
  }
  useRedesAdd:datosRedesAdd={
    id_footer:'1',
    nombre:'',
    icono:'',
    enlace:'',
  }
 
  Listarfooter:datosFooterVista[];
  Listarfooter2:datosFooterVista[];
  Listarredes:datosRedesVista[];
  Listarredes2:datosRedesVista[];
  idd:string;
  iddRedes:string;
  public showMe:Boolean=false;
  public showMe2:Boolean=false;
  public page: number;
  public errores=[];
  constructor(private router:Router,private FooterService:FooterService) { }

  //menu
  ngOnInit(): void {
    this.listarFooter();
    this.listarRedes();
  }
  mostrarOcultar(){
    this.showMe=!this.showMe
    this.listarFooter();
  }
  mostrarOcultar2(){
    this.showMe2=!this.showMe2
    this.listarFooter();
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
  mostrarModificar(id:string){
    this.idd=id;
    this.FooterService.getUnFooter(id).subscribe(
      res=>{
        this.Listarfooter2=<any>res;
      this.use3=this.Listarfooter2[0]

      
          this.listarFooter();
      },
      err=>console.log(err)
  
    );
  }
  mostrarModificarRedes(id:string){
    this.iddRedes=id;
    this.FooterService.getUnRed(id).subscribe(
      res=>{
        this.Listarredes2=<any>res;
      this.useRedes2=this.Listarredes2[0]
          this.listarRedes();
      },
      err=>console.log(err)
  
    );
  }
  modificar(){
    this.FooterService.putFooter(this.idd,this.use3).subscribe(
      res=>{
        this.errores=<any>res
        
          this.listarFooter();
      },
      err=>console.log(err)
  
    );
  }
  modificarRedes(){
    this.FooterService.putRedes(this.iddRedes,this.useRedes2).subscribe(
      res=>{
        this.errores=<any>res
        
          this.listarRedes();
      },
      err=>console.log(err)
  
    );
  }

  anadirRed(){
    this.FooterService.addRed(this.useRedesAdd).subscribe(
      res=>{
        this.errores=<any>res
        this.listarRedes();
        
      },
      err=>console.log(err)
  
    );

  }
  eliminarRed(id:string){
    this.FooterService.deleteRed(id).subscribe(
      res=>{
        this.listarRedes();
      },
      err=>console.log(err)
 
    );
  }

  limpiar(){
    this.useRedesAdd.nombre='';
    this.useRedesAdd.icono='';
    this.useRedesAdd.enlace='';
    this.useRedes2.nombre='';
    this.useRedes2.icono='';
    this.useRedes2.enlace='';
    this.errores=[];
  }
  limpiarfoo(){
    this.use3.telefono='';
    this.use3.descripcion='';
    this.use3.correo='';
    this.use3.direccion='';
    this.errores=[];
  }

}
