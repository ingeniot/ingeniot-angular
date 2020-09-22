import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,    
    //routing
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: '', component: HomeComponent},
        {path: 'inicio', component: HomeComponent},
        {path: 'registro', component: RegisterComponent},
        {path: 'login', component: LoginComponent},
        {path: 'logout/:sure', component: LoginComponent},        
        {path: '**', component: ErrorComponent},

      ]),
    FormsModule,
    HttpClientModule
    ],

  providers: [
   // appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
