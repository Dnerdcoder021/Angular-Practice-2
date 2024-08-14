import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PortfolioRoutingModule,AboutUsComponent,StudentComponent
  ]
})
export class PortfolioModule { }
