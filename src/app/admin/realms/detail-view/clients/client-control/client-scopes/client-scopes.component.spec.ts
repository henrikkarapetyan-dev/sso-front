import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientScopesComponent } from './client-scopes.component';

describe('ClientScopesComponent', () => {
  let component: ClientScopesComponent;
  let fixture: ComponentFixture<ClientScopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientScopesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientScopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
