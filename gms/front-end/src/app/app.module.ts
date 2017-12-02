import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { GridModule } from '@progress/kendo-angular-grid';

import {
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatButtonModule,
  MatSnackBarModule,

  MatToolbarModule,
  MatCardModule
} from '@angular/material';

// Routing Module
import { AppRoutingModule }             from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    GridModule,
    
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    
    MatToolbarModule,
    MatCardModule    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
