import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List.StudentComponent } from './list.student.component';

describe('List.StudentComponent', () => {
  let component: List.StudentComponent;
  let fixture: ComponentFixture<List.StudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List.StudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List.StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
