import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule }  from '@agm/core';
import { ImageService } from './portfolio/Image.service';
import { ImageFilterPipe } from './portfolio/filter.pipe';
import { PortfolioDetailComponent } from './portfolio/portfolio-detail/portfolio-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    PageNotFoundComponent,
    PortfolioComponent,
    ImageDetailComponent,
    ImageFilterPipe,
    PortfolioDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzXfD3JvHXMIM2ahqyD6y2YNN5h4Tkkxw'
    }), 
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
