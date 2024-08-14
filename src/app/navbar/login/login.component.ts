import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(){
    let numb=12;
    console.log("number",numb);
    let num=[1,2,3]
    console.log("arr",num);
    let i=0;
    for(;i<5;i++){
      console.log(i);
      
    }
    let a=(i<3)?"adult":2
    console.log(a);
    
    
    
  }
}
