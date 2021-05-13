import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofessorsComponent } from './myprofessors.component';

describe('MyprofessorsComponent', () => {
  let component: MyprofessorsComponent;
  let fixture: ComponentFixture<MyprofessorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprofessorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
