import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-circle-video-player',
  templateUrl: './circle-video-player.component.html',
  styleUrls: ['./circle-video-player.component.scss']
})
export class CircleVideoPlayerComponent implements OnInit {

  videoPlayer: HTMLMediaElement;
  currentTime: number;
  duration: number;
  percentPlayed: number;
  trackTime: boolean;
  @Input() src: string;
  @Input() borderColor: string;
  @Input() progressColor: string;
  @ViewChild('videoNode', {static: true}) videoNode;

  constructor() { }

  ngOnInit() {
    this.videoPlayer = this.videoNode.nativeElement;
    this.currentTime = 0; 
  }

  playVideo() {
    this.videoPlayer.play();
    this.trackTime = true;
    this.duration = this.videoPlayer.duration;
    window.requestAnimationFrame(this.trackPlayTime.bind(this));
  }

  pauseVideo() {
    this.videoPlayer.pause();
    this.trackTime = false;
  }

  trackPlayTime() {
    this.currentTime = this.videoPlayer.currentTime;
    this.percentPlayed = this.currentTime / this.duration;

    if (this.trackTime && this.currentTime < this.duration) {
      window.requestAnimationFrame(this.trackPlayTime.bind(this))
    }
  }

}
