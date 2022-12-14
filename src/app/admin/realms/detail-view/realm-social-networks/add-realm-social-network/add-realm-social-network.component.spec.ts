import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRealmSocialNetworkComponent } from './add-realm-social-network.component';

describe('AddRealmSocialNetworkComponent', () => {
  let component: AddRealmSocialNetworkComponent;
  let fixture: ComponentFixture<AddRealmSocialNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRealmSocialNetworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRealmSocialNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
