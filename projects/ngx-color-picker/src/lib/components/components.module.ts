import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GradientComponent } from './gradient.component';
import { HandlerComponent } from './handler.component';
import { PaletteComponent } from './palette.component';
import { PickerComponent } from './picker.component';
import { SliderComponent } from './slider.component';

@NgModule({
  exports: [GradientComponent, HandlerComponent, PaletteComponent, PickerComponent, SliderComponent],
  imports: [CommonModule],
  declarations: [GradientComponent, HandlerComponent, PaletteComponent, PickerComponent, SliderComponent]
})
export class ComponentsModule {}
