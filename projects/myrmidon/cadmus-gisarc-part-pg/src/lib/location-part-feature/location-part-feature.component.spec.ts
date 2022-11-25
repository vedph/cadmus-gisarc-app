import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationPartFeatureComponent } from './location-part-feature.component';

describe('LocationPartFeatureComponent', () => {
  let component: LocationPartFeatureComponent;
  let fixture: ComponentFixture<LocationPartFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationPartFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationPartFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
