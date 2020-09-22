// Imports necesarios
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/router';
//Importar componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

//Definir rutas
const appRoutes: Routes =[
    {path:'',           component:LoginComponent},  
    {path:'inicio',     component:LoginComponent},
    {path:'login',      component:LoginComponent},
    {path:'register',   component:RegisterComponent}
];

//Exportar configuración
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders Route  = RouterModule.forRoot(appRoutes);
