import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qlevel1Component } from './qlevel1.component';

describe('Qlevel1Component', () => {
  let component: Qlevel1Component;
  let fixture: ComponentFixture<Qlevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Qlevel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Qlevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
