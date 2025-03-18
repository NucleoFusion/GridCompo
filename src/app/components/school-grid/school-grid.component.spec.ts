import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolGridComponent } from './school-grid.component';

describe('SchoolGridComponent', () => {
  let component: SchoolGridComponent;
  let fixture: ComponentFixture<SchoolGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
