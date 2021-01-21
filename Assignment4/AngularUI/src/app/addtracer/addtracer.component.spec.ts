import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtracerComponent } from './addtracer.component';

describe('AddtracerComponent', () => {
  let component: AddtracerComponent;
  let fixture: ComponentFixture<AddtracerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtracerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtracerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
