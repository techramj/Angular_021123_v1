import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrSelectorComponent } from './attr-selector.component';

describe('AttrSelectorComponent', () => {
  let component: AttrSelectorComponent;
  let fixture: ComponentFixture<AttrSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttrSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
