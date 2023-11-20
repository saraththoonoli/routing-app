import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { WilsCardComponent } from './wils-card/wils-card.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'add-contact', component:AddContactComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductComponent},
  {path:'login', component:LoginComponent},
  {path:'details/:name',component:DetailsComponent},
  {path:"**",component:WilsCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
