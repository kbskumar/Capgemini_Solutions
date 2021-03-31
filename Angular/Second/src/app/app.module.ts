import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvertisementFormComponent } from './advertisement-form/advertisement-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdvertisementTableComponent } from './advertisement-table/advertisement-table.component';
import { AdvertisementUpdateComponent } from './advertisement-update/advertisement-update.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AdvertisementFormComponent,
    AdvertisementTableComponent,
    AdvertisementUpdateComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
