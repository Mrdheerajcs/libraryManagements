import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeUpdatesComponent } from './notice-updates.component';

describe('NoticeUpdatesComponent', () => {
  let component: NoticeUpdatesComponent;
  let fixture: ComponentFixture<NoticeUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeUpdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
