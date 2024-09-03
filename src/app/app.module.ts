import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ArrayTableComponent } from './array-table/array-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    VisualizerComponent,
    ArrayTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
