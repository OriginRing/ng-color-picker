import { NgModule } from '@angular/core';
import { NgAntdColorPickerComponent } from './ng-antd-color-picker.component';
import { NgAntdColorBlockComponent } from './ng-antd-color-block.component';

@NgModule({
  imports: [NgAntdColorPickerComponent, NgAntdColorBlockComponent],
  exports: [NgAntdColorPickerComponent, NgAntdColorBlockComponent]
})
export class NgAntdColorPickerModule {}
