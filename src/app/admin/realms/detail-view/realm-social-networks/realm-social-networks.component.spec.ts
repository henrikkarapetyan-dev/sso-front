import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmSocialNetworksComponent } from './realm-social-networks.component';

describe('RealmSocialNetworksComponent', () => {
  let component: RealmSocialNetworksComponent;
  let fixture: ComponentFixture<RealmSocialNetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealmSocialNetworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealmSocialNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
