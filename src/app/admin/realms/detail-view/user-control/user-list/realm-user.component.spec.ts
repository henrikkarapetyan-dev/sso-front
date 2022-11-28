import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmUserComponent } from './realm-user.component';

describe('RealmUserComponent', () => {
  let component: RealmUserComponent;
  let fixture: ComponentFixture<RealmUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealmUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealmUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
