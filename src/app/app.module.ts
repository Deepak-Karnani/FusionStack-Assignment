import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { MobilePageComponent } from './components/pages/mobile-page/mobile-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchComponent } from './components/search/search.component';
import { TagsComponent } from './components/tags/tags.component';
import { TitleComponent } from './components/title/title.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    MobilePageComponent,
    HomeComponent,
    HeaderComponent,
    PageNotFoundComponent,
    SearchComponent,
    TagsComponent,
    TitleComponent,
    StarRatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule, // Import and configure RouterModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
