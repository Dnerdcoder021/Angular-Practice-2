import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
userForm:any;
formvisible:boolean=true;
items:string[]=['i','i1','i2']
it:number=3
constructor(public formbuilder:FormBuilder){

 }
ngOnInit(){
   this.userForm=this.formbuilder.group({
    name:['',Validators.required],
    email:['']
   });
 }
onSubmit(){
  console.log("form submitted",this.userForm.value);
  
}
}
