import { Component } from '@angular/core';

import { Color } from '../../projects/ngx-color-picker/src/lib/interfaces/color';
import { HsbaColorType } from '../../projects/ngx-color-picker/src/lib/interfaces/type';

export const toHexFormat = (value?: string): string => value?.replace(/[^0-9a-fA-F#]/g, '').slice(0, 9) || '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  colorPresets: string[] = [
    '#F5222D',
    '#FA8C16',
    '#FADB14',
    '#8BBB11',
    '#52C41A',
    '#13A8A8',
    '#1677FF',
    '#2F54EB',
    '#722ED1',
    '#EB2F96',
    '#F5222D4D',
    '#FA8C164D',
    '#FADB144D',
    '#8BBB114D',
    '#52C41A4D',
    '#13A8A84D',
    '#1677FF4D',
    '#2F54EB4D',
    '#722ED14D',
    '#EB2F964D'
  ];

  value: string = 'ff6600';
  color: string = this.value;

  onChange(value: { color: Color; type?: HsbaColorType }): void {
    this.color = value.color.getAlpha() < 1 ? value.color.toHex8String() : value.color.toHexString();
  }

  inputChange(e: Event): void {
    const REGEXP = /^[0-9a-fA-F]{6}$/;
    const originValue = (<HTMLInputElement>e.target).value;
    if (!REGEXP.test(originValue)) {
      return;
    }
    this.value = toHexFormat(originValue);
  }
}
