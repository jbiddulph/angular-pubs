import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PubsComponent } from './components/pubs/pubs.component';


const routes: Routes = [
  {
      path: 'pubs',
      component: PubsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})


export class AppRoutingModule { }
