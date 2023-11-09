import { Component } from '@angular/core';

@Component({
  selector: 'color-palette',
  standalone: true,
  template: `
    <div class="ant-color-picker-palette" style="position: relative">
      <ng-content></ng-content>
    </div>
  `
})
export class PaletteComponent {}
