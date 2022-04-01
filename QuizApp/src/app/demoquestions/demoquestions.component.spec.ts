import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoquestionsComponent } from './demoquestions.component';

describe('DemoquestionsComponent', () => {
  let component: DemoquestionsComponent;
  let fixture: ComponentFixture<DemoquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
