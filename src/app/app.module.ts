import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    TableComponent,
    Table2Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
