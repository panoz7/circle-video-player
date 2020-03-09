import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-progress-bar',
  templateUrl: './circle-progress-bar.component.html',
  styleUrls: ['./circle-progress-bar.component.scss']
})
export class CircleProgressBarComponent implements OnInit {

  circumference: number;
  @Input() percentPlayed: number;
  @Input() color: string;
  @Input() radius: number;

  constructor() { }

  ngOnInit() {
    this.circumference = Math.PI * this.radius * 2;
  }

}
