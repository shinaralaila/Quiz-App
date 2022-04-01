import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoquizComponent } from './demoquiz.component';

describe('DemoquizComponent', () => {
  let component: DemoquizComponent;
  let fixture: ComponentFixture<DemoquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
