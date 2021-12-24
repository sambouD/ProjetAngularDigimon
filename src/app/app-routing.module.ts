import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailDigimonComponent } from './detail-digimon/detail-digimon.component';
import { UpDigimonComponent } from './up-digimon/up-digimon.component';
import { AjouterDigimonComponent } from './ajouter-digimon/ajouter-digimon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: DetailDigimonComponent
  },
  {
    path: 'up/:id',
    component: UpDigimonComponent
  },
  {
    path:'ajouter',
    component: AjouterDigimonComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
