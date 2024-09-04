import { Routes } from '@angular/router';
import { BookComponent } from './pages/book/book.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdatebookComponent } from './pages/updatebook/updatebook.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'book', component:BookComponent},
    {path:'updatebook/:id', component:UpdatebookComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
];
