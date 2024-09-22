import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    NgxTypedWriterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
