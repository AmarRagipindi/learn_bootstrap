import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaystylesComponent } from './displaystyles.component';

describe('DisplaystylesComponent', () => {
  let component: DisplaystylesComponent;
  let fixture: ComponentFixture<DisplaystylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaystylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaystylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
