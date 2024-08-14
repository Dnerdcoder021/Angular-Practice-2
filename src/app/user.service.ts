import { Injectable } from '@angular/core';
import { error } from 'console';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:any=[
    'user1',
    'user2',
    'user3'
  ]

  constructor() { }
  getdata(){
    return "data from service"
  }
  getusers(){
    return this.users;
  }
  fetchdata():Promise<string>{
    return new Promise((resolve,reject)=>{
      const success=true;
      setTimeout(()=>{
        if(!success){
          resolve('data from resolve---')
        }else{
          reject('error while fetching --rejected')
        }
      },1000)
    })
  }

  observeData(){
    let request=of('data from my side');
    request.subscribe({
      next:(data)=>{
        console.log(data);        
      },
      error:(error)=>{
        console.log('subscription error',error);        
      },
      complete:()=>{
        console.log('request completed');
        
      }

    })
  }
}
