import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from '../app/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Week5Component } from './week5/week5.component';
import { PegawaiComponent } from './pegawai/pegawai.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Week5Component,
    PegawaiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
