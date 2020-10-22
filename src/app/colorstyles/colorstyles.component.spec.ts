import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorstylesComponent } from './colorstyles.component';

describe('ColorstylesComponent', () => {
  let component: ColorstylesComponent;
  let fixture: ComponentFixture<ColorstylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorstylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorstylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
