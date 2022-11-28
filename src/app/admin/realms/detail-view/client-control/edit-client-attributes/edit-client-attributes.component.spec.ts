import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientAttributesComponent } from './edit-client-attributes.component';

describe('EditClientAttributesComponent', () => {
  let component: EditClientAttributesComponent;
  let fixture: ComponentFixture<EditClientAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
