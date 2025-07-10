import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomePageModule],
  providers: [provideHttpClient(withFetch()), provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
