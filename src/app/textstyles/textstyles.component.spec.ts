import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextstylesComponent } from './textstyles.component';

describe('TextstylesComponent', () => {
  let component: TextstylesComponent;
  let fixture: ComponentFixture<TextstylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextstylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextstylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
