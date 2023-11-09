import { Component, EventEmitter, Input, Output } from '@angular/core';
import { defaultColor } from './util/util';

@Component({
  selector: 'ng-antd-color-block',
  standalone: true,
  template: `
    <div class="ant-color-picker-color-block" (click)="nzOnClick.emit(true)">
      <div class="ant-color-picker-color-block-inner" [style.background-color]="color"></div>
    </div>
  `
})
export class NgAntdColorBlockComponent {
  @Input() color: string = defaultColor.toHsbString();
  @Output() readonly nzOnClick = new EventEmitter<boolean>();
}
