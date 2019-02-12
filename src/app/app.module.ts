import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NgMasonryGridModule } from 'ng-masonry-grid';

import { HeaderComponent } from './components/header/header.component';
import { PubsComponent } from './components/pubs/pubs.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PubsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgMasonryGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
