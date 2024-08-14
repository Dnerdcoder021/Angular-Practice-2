import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgSelectModule,MatFormFieldModule],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss'
})
export class EvaluationComponent {
  medicalForm:any;
constructor(private formbuilder:FormBuilder){

}
ngOnInit(){
  this.initialiseForm()
}
initialiseForm(){
  this.medicalForm=this.formbuilder.group({
    name:['',[Validators.required]],
    age:['',Validators.required,Validators.min(1),Validators.max(100)],
    gender:['',Validators.required],
    contact:['',Validators.required,Validators.pattern('^[0-9]{10}$')],
    email:['',Validators.required,Validators.email],
    painscore:['']

  });
}
submitForm(){
  if(this.medicalForm.valid){
    console.log("Form is Submitted",this.medicalForm.value);
    
  }
}
handleSubmit(event: any){
    console.log("Evennt",event);
    if(event.ctrlKey){
      console.log("control pressed");
      

    }else{
        console.log("normal");
        
    }
    


  
}
}
