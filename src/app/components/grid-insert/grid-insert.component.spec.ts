import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridInsertComponent } from './grid-insert.component';

describe('GridInsertComponent', () => {
  let component: GridInsertComponent;
  let fixture: ComponentFixture<GridInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridInsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
