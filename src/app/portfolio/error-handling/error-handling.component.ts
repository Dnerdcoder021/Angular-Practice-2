import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-handling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-handling.component.html',
  styleUrl: './error-handling.component.scss'
})
export class ErrorHandlingComponent {
  data:any;
  user:any;
  constructor(public userservice:UserService){
    // this.errorhandling();
    // this.data=this.userservice.getdata();
    // console.log("result",this.data);
    // 

  }
  fetchdata:any;
  observedata:any;
  async ngOnInit(){
    // this.user=this.userservice.getusers();
    // console.log("users-->",this.user);
    // this.fetchdata=await this.userservice.fetchdata();
    // console.log("fetched data--",this.fetchdata);
    this.observedata=this.userservice.observeData();
    console.log(this.observedata);
    
    
    
  }
  // sampleError(){
  //   let x:number=null!;
  //   console.log("sample:",x);
  //   throw new Error("Error Message Shown")
  // }
  // errorhandling(){
  //   try{
  //     let result =this.sampleError();
  //     console.log("result",result);
      

  //   }catch(error:any){
  //     console.error(error.message)

  //   }finally{
  //     console.log("finally");
      

  //   }
  // }


}
