import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-color-block',
  template: `
    <div class="color-picker-block" [style]="style" (click)="nzOnClick.emit(true)">
      <div class="color-picker-block-inner" [style.background-color]="color"></div>
    </div>
  `
})
export class NgxColorBlockComponent {
  @Input() color: string | null = null;
  @Input() style: string | null = null;
  @Output() readonly nzOnClick = new EventEmitter<boolean>();
}
