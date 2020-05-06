import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {ImageFormatterComponent} from './image-formatter/image-formatter.component';
import {LinkFormatterComponent} from './link-formatter/link-formatter.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageFormatterComponent,
    LinkFormatterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    AgGridModule.withComponents([ImageFormatterComponent]),
    AgGridModule.withComponents([LinkFormatterComponent])
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
