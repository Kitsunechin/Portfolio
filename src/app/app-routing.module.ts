import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailComponent } from './portfolio/portfolio-detail/portfolio-detail.component';


const routes: Routes = [
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },

  { 
    path: 'image/:id',
    component: PortfolioDetailComponent 
  },

  {
    path: 'image/:id/portfolio',
    component: PortfolioComponent,
  },

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },

{
  path: '**', //nieznana sciezka
  component: PageNotFoundComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
