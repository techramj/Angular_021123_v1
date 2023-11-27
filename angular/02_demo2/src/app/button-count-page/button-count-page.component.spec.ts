import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCountPageComponent } from './button-count-page.component';

describe('ButtonCountPageComponent', () => {
  let component: ButtonCountPageComponent;
  let fixture: ComponentFixture<ButtonCountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCountPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
