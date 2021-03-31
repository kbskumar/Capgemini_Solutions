import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateMenuComponent } from './update-menu/update-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMenuComponent,
    UpdateMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
