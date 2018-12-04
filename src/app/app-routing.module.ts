import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { ClientsComponent } from './component/clients/clients.component';
import { HomeComponent } from './component/menu/home/home.component';
import { AboutComponent } from './component/menu/about/about.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
