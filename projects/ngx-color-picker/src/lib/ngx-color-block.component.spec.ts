import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxColorBlockComponent } from './ngx-color-block.component';
import { NgxColorPickerModule } from './ngx-color-picker.module';
import { By } from '@angular/platform-browser';

describe('NgxColorBlockComponent', () => {
  let component: NzxTestColorBlockComponent;
  let fixture: ComponentFixture<NzxTestColorBlockComponent>;
  let resultEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NzxTestColorBlockComponent],
      imports: [NgxColorPickerModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NzxTestColorBlockComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    resultEl = fixture.debugElement.query(By.directive(NgxColorBlockComponent));
  });

  it('color-block color', () => {
    component.color = '#ff6600';
    fixture.detectChanges();
    expect(resultEl.nativeElement.querySelector('.color-picker-block-inner').style.backgroundColor).toBe(
      'rgb(255, 102, 0)'
    );
  });

  it('color-block click', () => {
    fixture.detectChanges();
    resultEl.nativeElement.querySelector('.color-picker-block').click();
    expect(component.isClick).toBeTrue();
  });
});

@Component({
  template: `
    <ngx-color-block [color]="color" (nzOnClick)="clickHandle($event)"></ngx-color-block>
  `
})
export class NzxTestColorBlockComponent {
  color = '#1677ff';
  isClick: boolean = false;

  clickHandle(value: boolean): void {
    this.isClick = value;
  }
}
