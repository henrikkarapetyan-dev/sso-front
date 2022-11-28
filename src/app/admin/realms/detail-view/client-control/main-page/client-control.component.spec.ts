import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientControlComponent } from './client-control.component';

describe('ClientDetailsComponent', () => {
  let component: ClientControlComponent;
  let fixture: ComponentFixture<ClientControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
