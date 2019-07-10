import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLibComponent } from './service-lib.component';

describe('ServiceLibComponent', () => {
  let component: ServiceLibComponent;
  let fixture: ComponentFixture<ServiceLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
