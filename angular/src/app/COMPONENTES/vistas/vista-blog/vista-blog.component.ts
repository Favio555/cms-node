import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{datosBlog,BlogService} from '../../../SERVICES/blog.service'
@Component({
  selector: 'app-vista-blog',
  templateUrl: './vista-blog.component.html',
  styleUrls: ['./vista-blog.component.scss']
})
export class VistaBlogComponent implements OnInit {

  ListarBlog:datosBlog[]
 
  constructor(private router:Router,private BlogService:BlogService) { }

  ngOnInit(): void {
  this.listarBlog();
  }

  listarBlog(){
    this.BlogService.getBlog().subscribe(
      res=>{
        this.ListarBlog=<any>res;
      },
      err=>console.log(err)
 
    );
  }

}
