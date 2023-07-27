import { NgModule } from '@angular/core';
import { NgxColorPickerComponent } from './ngx-color-picker.component';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { NgxColorBlockComponent } from './ngx-color-block.component';

@NgModule({
  declarations: [NgxColorPickerComponent, NgxColorBlockComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [NgxColorPickerComponent, NgxColorBlockComponent]
})
export class NgxColorPickerModule {}
