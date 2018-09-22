import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { IndexComponent } from '../components/index/index.component';
import { AddComponent } from '../components/add/add.component';
import { EditComponent } from '../components/edit/edit.component';

const routes: Routes = [
  { path: '', component : IndexComponent, pathMatch: 'full'},
  { path: 'add', component : AddComponent },
  { path: 'edit/:id', component : EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
