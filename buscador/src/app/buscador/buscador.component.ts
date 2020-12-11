import { Component, OnInit } from '@angular/core';
import { userService } from '../userService/user.service';
import { User } from '../User/user';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  search : string;
  user!: User;
  noResults : boolean=false;
  details : boolean=false;

detail(){
  this.userService.userSearch(this.search).subscribe(
    user => {
      this.user = user; this.result()
    }
  )

 

}


result(){
  if(this.user.total_count>0){
    this.details=true;
    this.noResults=false;
  }else{
    this.details=false;
    this.noResults=true;
  }
}


  
  constructor(private userService:userService) {
    this.search = '';
}

  ngOnInit(): void {
  }

 /* buscarid() {
   
    this.usuarioService.userSearch(this.search).subscribe(
      Region => {
        this.myComuna = Region; console.log(Region)
      }
    )

  }*/
}
