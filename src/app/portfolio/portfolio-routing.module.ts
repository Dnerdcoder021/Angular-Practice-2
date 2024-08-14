import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { StudentComponent } from './student/student.component';
import { PracticeComponent } from './practice/practice.component';
import { AnimationsComponent } from './animations/animations.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';

const routes: Routes = [
  {path:'about-us',component:AboutUsComponent},
  {path:'student',component:StudentComponent},
  {path:'practice',component:PracticeComponent},
  {path:'animations',component:AnimationsComponent},
  {path:'error-handling',component:ErrorHandlingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
