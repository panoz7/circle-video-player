import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleVideoPlayerComponent } from './circle-video-player.component';

describe('CircleVideoPlayerComponent', () => {
  let component: CircleVideoPlayerComponent;
  let fixture: ComponentFixture<CircleVideoPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleVideoPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
