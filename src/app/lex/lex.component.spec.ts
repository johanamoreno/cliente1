import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexComponent } from './lex.component';

describe('LexComponent', () => {
  let component: LexComponent;
  let fixture: ComponentFixture<LexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
