import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgxColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgxColorPickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
