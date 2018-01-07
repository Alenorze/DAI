import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
