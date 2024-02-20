import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionlegComponent } from './mentionleg.component';

describe('MentionlegComponent', () => {
  let component: MentionlegComponent;
  let fixture: ComponentFixture<MentionlegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentionlegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionlegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
