import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { ContactComponent } from './contact';
import { AboutComponent } from './about';
import { FaqComponent } from './faq';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'faq', component: FaqComponent},
    
    //otherwise resdirect to home
    {path: '**', redirectTo: ''}

];


//export class AppRoutingModule { }

export const AppRoutingModule = RouterModule.forRoot(routes);
