import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MyServiceService} from './my-service.service';
import {FormsModule} from '@angular/forms';
import { InsertTabComponent } from './insert-tab/insert-tab.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { DetailsTabComponent } from './details-tab/details-tab.component';
import { EditTabComponent } from './edit-tab/edit-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    InsertTabComponent,
    AllStudentsComponent,
    DetailsTabComponent,
    EditTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
