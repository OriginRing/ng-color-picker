import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgAntdColorPickerModule } from 'ng-antd-color-picker';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgAntdColorPickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
