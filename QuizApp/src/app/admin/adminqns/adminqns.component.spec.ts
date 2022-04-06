import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminqnsComponent } from './adminqns.component';

describe('AdminqnsComponent', () => {
  let component: AdminqnsComponent;
  let fixture: ComponentFixture<AdminqnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminqnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminqnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
