import { Component } from '@angular/core';

@Component({
  selector: 'color-palette',
  template: `
    <div class="color-picker-palette" style="position: relative">
      <ng-content></ng-content>
    </div>
  `
})
export class PaletteComponent {}
