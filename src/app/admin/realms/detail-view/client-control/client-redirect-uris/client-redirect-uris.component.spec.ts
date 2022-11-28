import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRedirectUrisComponent } from './client-redirect-uris.component';

describe('ClientRedirectUrisComponent', () => {
  let component: ClientRedirectUrisComponent;
  let fixture: ComponentFixture<ClientRedirectUrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRedirectUrisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRedirectUrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
