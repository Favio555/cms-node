import { Component, OnInit } from '@angular/core';
import { LoginService ,datos} from 'src/app/SERVICES/login.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-loguearse',
  templateUrl: './loguearse.component.html',
  styleUrls: ['./loguearse.component.scss']
})
export class LoguearseComponent implements OnInit {

  use:datos={
    usuario:'',
    contrasena:'',
  }

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  logIn(){
  this.loginService.singin(this.use).subscribe(res =>{
    console.log(res);
    this.router.navigate(['/listarProfesor/']);
  })
  }

}
