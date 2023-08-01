import { Component, Input } from '@angular/core';

type HandlerSize = 'default' | 'small';

@Component({
  selector: 'color-handler',
  template: `
    <div
      class="color-picker-handler"
      [style.background-color]="color"
      [class.color-picker-handler-sm]="size === 'small'"
    ></div>
  `
})
export class HandlerComponent {
  @Input() color: string | null = null;
  @Input() size: HandlerSize = 'default';
}