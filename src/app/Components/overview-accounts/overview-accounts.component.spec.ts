import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewAccountsComponent } from './overview-accounts.component';

describe('OverviewAccountsComponent', () => {
  let component: OverviewAccountsComponent;
  let fixture: ComponentFixture<OverviewAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
