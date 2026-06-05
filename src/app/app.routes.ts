import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'contacter', component: ContactComponent },
  { path: '**', redirectTo: '' },
];
