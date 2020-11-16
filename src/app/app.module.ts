import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiagramComponent } from './components/diagram/diagram.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from "@angular/common/http";
import { SearchPipe } from './pipes/search.pipe';
import {FormsModule} from "@angular/forms";
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagramComponent,
    TableComponent,
    SearchPipe,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
