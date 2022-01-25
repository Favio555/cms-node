import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{VideoService,datosVideo} from '../../../SERVICES/video.service'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-vista-video',
  templateUrl: './vista-video.component.html',
  styleUrls: ['./vista-video.component.scss']
})
export class VistaVideoComponent implements OnInit {

  ListarVideo:datosVideo[]
 
  constructor( private router:Router,private videoService:VideoService,private sanitizer: DomSanitizer) {
   
   }


  ngOnInit(): void {
this.listarVideo();
  }
 
  listarVideo(){
    this.videoService.getVideos().subscribe(
      res=>{
        this.ListarVideo=<any>res;
      },
      err=>console.log(err)
 
    );
  }

}
