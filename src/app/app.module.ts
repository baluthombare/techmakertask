import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCompseronent } from './task/task.component';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { AddComponent } from './add/add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    TaskCompseronent,
    SearchPipe,
    AddComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   NgxPaginationModule ,
   FormsModule,
   BrowserAnimationsModule,
   MatDialogModule,
   MatButtonModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
