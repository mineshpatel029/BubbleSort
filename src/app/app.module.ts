import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ArrayTableComponent } from './array-table/array-table.component';
import { HistoryComponent } from './history/history.component';
import { NgxTypedWriterModule } from 'ngx-typed-writer'; 

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    VisualizerComponent,
    ArrayTableComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxTypedWriterModule 
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }