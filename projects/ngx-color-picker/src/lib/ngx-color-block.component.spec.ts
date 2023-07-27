import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxColorPickerComponent } from './ngx-color-picker.component';
import { NgxColorBlockComponent } from './ngx-color-block.component';
import { NgxColorPickerModule } from './ngx-color-picker.module';
import { By } from '@angular/platform-browser';

describe('NgxColorBlockComponent', () => {
  let component: NgxColorBlockComponent;
  let fixture: ComponentFixture<NgxColorBlockComponent>;
  let resultEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxColorBlockComponent],
      imports: [NgxColorPickerModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NgxColorBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    resultEl = fixture.debugElement.query(By.directive(NgxColorBlockComponent));
  });

  it('color-block color', () => {
    component.color = '#ff6600';
    fixture.detectChanges();
    expect(resultEl.nativeElement.querySelector('.color-picker-block').style.backgroundColor).toBe('rgb(255, 102, 0)');
  });
});
