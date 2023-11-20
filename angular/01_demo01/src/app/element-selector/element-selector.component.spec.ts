import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSelectorComponent } from './element-selector.component';

describe('ElementSelectorComponent', () => {
  let component: ElementSelectorComponent;
  let fixture: ComponentFixture<ElementSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
