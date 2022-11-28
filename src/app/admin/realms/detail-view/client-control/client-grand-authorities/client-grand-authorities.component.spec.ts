import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGrandAuthoritiesComponent } from './client-grand-authorities.component';

describe('ClientGrandAuthoritiesComponent', () => {
  let component: ClientGrandAuthoritiesComponent;
  let fixture: ComponentFixture<ClientGrandAuthoritiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientGrandAuthoritiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientGrandAuthoritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
