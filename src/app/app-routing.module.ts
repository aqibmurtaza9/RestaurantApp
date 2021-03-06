import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { RegisterComponent } from './register/register.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { UpdaterestoComponent } from './updateresto/updateresto.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'add',
    component: AddRestoComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'list',
    component: ListRestoComponent
  },
  {
    path:'update',
    component: UpdaterestoComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
