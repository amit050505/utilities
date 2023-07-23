import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutUsModule } from './about-us/about-us.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsModule } from './contact-us/contact-us.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreComponent } from './store/store.component';
import { FooterComponent } from './footer/footer.component';
import { FilterService } from './services/filter.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StoreComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactUsModule,
    AboutUsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
