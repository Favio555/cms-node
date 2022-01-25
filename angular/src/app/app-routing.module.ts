import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {enableProdMode} from '@angular/core';
//enableProdMode();
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import {LoguearseComponent} from './COMPONENTES/login/loguearse/loguearse.component';
import{ProfesorInicioComponent} from './COMPONENTES/profesor/profesor-inicio/profesor-inicio.component';
import{ProfesorListarComponent} from './COMPONENTES/profesor/profesor-listar/profesor-listar.component';
import{VistaProfesorComponent} from './COMPONENTES/vistas/vista-profesor/vista-profesor.component';
import{ListarGaleriaComponent} from './COMPONENTES/galeria/listar-galeria/listar-galeria.component';
import{InGaleriaComponent} from './COMPONENTES/galeria/in-galeria/in-galeria.component';
import{ListarVideoComponent} from './COMPONENTES/video/listar-video/listar-video.component';
import { ListarAvisoComponent } from './COMPONENTES/avisos/listar-aviso/listar-aviso.component';
import { ListarBlogComponent } from './COMPONENTES/blog/listar-blog/listar-blog.component';
import{MenuHorizontalComponent} from './COMPONENTES/menu/menu-horizontal/menu-horizontal.component';
import{ListarFooterComponent} from './COMPONENTES/footer/listar-footer/listar-footer.component'
//VISTAS
//import{ } from './COMPONENTES/vistas';
import{ VistaAvisoComponent} from './COMPONENTES/vistas/vista-aviso/vista-aviso.component';
import{ VistaBlogComponent} from './COMPONENTES/vistas/vista-blog/vista-blog.component';
import{ VistaGaleriaComponent} from './COMPONENTES/vistas/vista-galeria/vista-galeria.component';
import{ VistaVideoComponent} from './COMPONENTES/vistas/vista-video/vista-video.component';
import { VistaEnlaceComponent } from './COMPONENTES/enlace/vista-enlace/vista-enlace.component';
import { ListarSliderComponent } from './COMPONENTES/slider/listar-slider/listar-slider.component';

const routes: Routes = [
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path: 'login',component:LoguearseComponent},
  {path:'profesorinicio',component:ProfesorInicioComponent},
  {path:'listarProfesor',component:ProfesorListarComponent},
  {path:'vistaProfesor',component:VistaProfesorComponent},
  {path:'listarGaleria',component:ListarGaleriaComponent},
  {path:'in-galeria',component:InGaleriaComponent},
  {path:'listarvideo',component:ListarVideoComponent},
  {path:'listaravisos',component:ListarAvisoComponent},
  {path:'listarblog',component:ListarBlogComponent},
  {path:'menudenavegacion',component:MenuHorizontalComponent},
  {path:'footer',component:ListarFooterComponent},
  {path:'enlace',component:VistaEnlaceComponent},
  {path:'slider',component:ListarSliderComponent},

//VISTAS
//{path:'', }
{path:'vista-aviso', component:VistaAvisoComponent },
{path:'vista-blog',component:VistaBlogComponent },
{path:'vista-galeria',component:VistaGaleriaComponent },
{path:'vista-video',component:VistaVideoComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
