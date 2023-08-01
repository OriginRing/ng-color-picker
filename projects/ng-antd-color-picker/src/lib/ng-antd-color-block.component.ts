import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ng-antd-color-block',
  template: `
    <div class="color-picker-block" (click)="nzOnClick.emit(true)">
      <div class="color-picker-block-inner" [style.background-color]="color"></div>
    </div>
  `
})
export class NgAntdColorBlockComponent {
  @Input() color: string | null = null;
  @Output() readonly nzOnClick = new EventEmitter<boolean>();
}