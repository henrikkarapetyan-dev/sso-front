import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserAttributesComponent } from './edit-user-attributes.component';

describe('EditUserAttributesComponent', () => {
  let component: EditUserAttributesComponent;
  let fixture: ComponentFixture<EditUserAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
