import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleVideoPlayerComponent } from './circle-video-player/circle-video-player.component';
import { CircleProgressBarComponent } from './circle-progress-bar/circle-progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleVideoPlayerComponent,
    CircleProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
