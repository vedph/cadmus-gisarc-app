import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationPartComponent } from './location-part.component';

describe('LocationPartComponent', () => {
  let component: LocationPartComponent;
  let fixture: ComponentFixture<LocationPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
