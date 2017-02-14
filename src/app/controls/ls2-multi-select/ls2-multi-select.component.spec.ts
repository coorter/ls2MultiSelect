/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ls2MultiSelectComponent } from './ls2-multi-select.component';

describe('Ls2MultiSelectComponent', () => {
  let component: Ls2MultiSelectComponent;
  let fixture: ComponentFixture<Ls2MultiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ls2MultiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ls2MultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
