import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';


import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module paginacion


import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoguearseComponent } from './COMPONENTES/login/loguearse/loguearse.component';
import{ProfesorInicioComponent} from './COMPONENTES/profesor/profesor-inicio/profesor-inicio.component';
import { MenuLateralComponent } from './COMPONENTES/menu/menu-lateral/menu-lateral.component';
import { ProfesorListarComponent } from './COMPONENTES/profesor/profesor-listar/profesor-listar.component';
import { NavVistaPrincipalComponent } from './COMPONENTES/vistas/nav-vista-principal/nav-vista-principal.component';
import { VistaProfesorComponent } from './COMPONENTES/vistas/vista-profesor/vista-profesor.component';
import { ListarGaleriaComponent } from './COMPONENTES/galeria/listar-galeria/listar-galeria.component';
import { InGaleriaComponent } from './COMPONENTES/galeria/in-galeria/in-galeria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListarVideoComponent } from './COMPONENTES/video/listar-video/listar-video.component';
import { InVideoComponent } from './COMPONENTES/video/in-video/in-video.component';
import { ListarAvisoComponent } from './COMPONENTES/avisos/listar-aviso/listar-aviso.component';
import { InAvisoComponent } from './COMPONENTES/avisos/in-aviso/in-aviso.component';
import { ListarBlogComponent } from './COMPONENTES/blog/listar-blog/listar-blog.component';
import { InBlogComponent } from './COMPONENTES/blog/in-blog/in-blog.component';
import { MenuHorizontalComponent } from './COMPONENTES/menu/menu-horizontal/menu-horizontal.component';
import { VistaGaleriaComponent } from './COMPONENTES/vistas/vista-galeria/vista-galeria.component';
import { VistaVideoComponent } from './COMPONENTES/vistas/vista-video/vista-video.component';
import { VistaAvisoComponent } from './COMPONENTES/vistas/vista-aviso/vista-aviso.component';
import { VistaBlogComponent } from './COMPONENTES/vistas/vista-blog/vista-blog.component';
import { ListarFooterComponent } from './COMPONENTES/footer/listar-footer/listar-footer.component';
import { InFooterComponent } from './COMPONENTES/footer/in-footer/in-footer.component';
import { VistaFooterComponent } from './COMPONENTES/vistas/vista-footer/vista-footer.component';
import { VistaEnlaceComponent } from './COMPONENTES/enlace/vista-enlace/vista-enlace.component';
import { InEnlaceComponent } from './COMPONENTES/enlace/in-enlace/in-enlace.component';
import { ListarSliderComponent } from './COMPONENTES/slider/listar-slider/listar-slider.component';
import { InSliderComponent } from './COMPONENTES/slider/in-slider/in-slider.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoguearseComponent,
    ProfesorInicioComponent,
    MenuLateralComponent,
    ProfesorListarComponent,
    NavVistaPrincipalComponent,
    VistaProfesorComponent,
    ListarGaleriaComponent,
    InGaleriaComponent,
    ListarVideoComponent,
    InVideoComponent,
    ListarAvisoComponent,
    InAvisoComponent,
    ListarBlogComponent,
    InBlogComponent,
    MenuHorizontalComponent,
    VistaGaleriaComponent,
    VistaVideoComponent,
    VistaAvisoComponent,
    VistaBlogComponent,
    ListarFooterComponent,
    InFooterComponent,
    VistaFooterComponent,
    VistaEnlaceComponent,
    InEnlaceComponent,
    ListarSliderComponent,
    InSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxPaginationModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
