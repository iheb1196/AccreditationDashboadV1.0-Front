import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllprofessorsComponent } from './allprofessors.component';

describe('AllprofessorsComponent', () => {
  let component: AllprofessorsComponent;
  let fixture: ComponentFixture<AllprofessorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllprofessorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllprofessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
