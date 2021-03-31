import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from  './add-menu/add-menu.component'
import {UpdateMenuComponent} from './update-menu/update-menu.component'

const routes: Routes = [
  {
    component:AddMenuComponent,
    path:'menu'
  },
  {
    component:UpdateMenuComponent,
    path:'update/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
