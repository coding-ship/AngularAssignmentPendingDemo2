import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormControl, FormGroup,FormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
 { path: '', component: LoginpageComponent, pathMatch: 'full' },
 
  { path: 'home',component: DashboardComponent },
  
   
   { path: 'signup',
   component: SignupComponent ,
   
    }
 //If no matching route found, go back to home route
];
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    DashboardComponent,
    SignupComponent,
   
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
   RouterModule.forRoot(routes)
  ],
  //exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
