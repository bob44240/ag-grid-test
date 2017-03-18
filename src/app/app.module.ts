import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyGridAppComponent } from './my-grid-app/my-grid-app.component';
import { RedCompComponent } from './red-comp/red-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGridAppComponent,
    RedCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
