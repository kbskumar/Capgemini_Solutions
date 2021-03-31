import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdvertisementFormComponent} from './advertisement-form/advertisement-form.component';
import {AdvertisementTableComponent} from './advertisement-table/advertisement-table.component';
import {AdvertisementUpdateComponent} from './advertisement-update/advertisement-update.component'

const routes: Routes = [
  {path:'form',component:AdvertisementFormComponent},
  {path:'table',component:AdvertisementTableComponent},
  {
    component:AdvertisementUpdateComponent,
    path:'update/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
