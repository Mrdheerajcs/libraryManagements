import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeVComponent } from './notice-v.component';

describe('NoticeVComponent', () => {
  let component: NoticeVComponent;
  let fixture: ComponentFixture<NoticeVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
