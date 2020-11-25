import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Partt2Component } from './partt2.component';

describe('Partt2Component', () => {
  let component: Partt2Component;
  let fixture: ComponentFixture<Partt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Partt2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Partt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
