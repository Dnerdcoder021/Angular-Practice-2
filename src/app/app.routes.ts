import { Routes } from '@angular/router';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AboutUsComponent } from './portfolio/about-us/about-us.component';
export const routes: Routes = [
    {path:'portfolio', loadChildren:()=>import('./portfolio/portfolio.module').then(m=>m.PortfolioModule)},
    // {path:'about-us',component:AboutUsComponent},
    {path:"medical-form", loadChildren:()=>import('./medical-form/medical-form.module').then(m=>m.MedicalFormModule)}
];
