import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { StatusCreateComponent } from './status-create/status-create.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    StatusCreateComponent,
    StatusDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
