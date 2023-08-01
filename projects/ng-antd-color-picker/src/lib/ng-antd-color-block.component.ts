import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ng-antd-color-block',
  template: `
    <div class="ant-color-picker-color-block" (click)="nzOnClick.emit(true)">
      <div class="ant-color-picker-color-block-inner" [style.background-color]="color"></div>
    </div>
  `
})
export class NgAntdColorBlockComponent {
  @Input() color: string | null = null;
  @Output() readonly nzOnClick = new EventEmitter<boolean>();
}
