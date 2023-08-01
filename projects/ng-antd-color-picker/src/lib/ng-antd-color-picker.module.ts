import { NgModule } from '@angular/core';
import { NgAntdColorPickerComponent } from './ng-antd-color-picker.component';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { NgAntdColorBlockComponent } from './ng-antd-color-block.component';

@NgModule({
  declarations: [NgAntdColorPickerComponent, NgAntdColorBlockComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [NgAntdColorPickerComponent, NgAntdColorBlockComponent]
})
export class NgAntdColorPickerModule {}
