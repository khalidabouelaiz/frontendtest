import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegledejeuxComponent } from './regledejeux.component';

describe('RegledejeuxComponent', () => {
  let component: RegledejeuxComponent;
  let fixture: ComponentFixture<RegledejeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegledejeuxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegledejeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
