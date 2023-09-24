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
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/pages/product/product.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';




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
    ProductComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    NzIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
