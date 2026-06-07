import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-animated-image',
  standalone: true,
  template: `
    <img [src]="currentSrc" [alt]="alt" [class]="imgClass"
         (mouseenter)="start()"
         (mouseleave)="stop()" />
  `,
})
export class AnimatedImageComponent implements OnDestroy {
  @Input() src = '';
  @Input() frames: string[] = [];
  @Input() frameInterval = 150;
  @Input() alt = '';
  @Input() imgClass = '';

  currentIndex = 0;
  private timer: ReturnType<typeof setInterval> | null = null;

  get currentSrc(): string {
    return this.frames.length > 0 ? this.frames[this.currentIndex] : this.src;
  }

  start() {
    if (this.frames.length < 2) return;
    this.timer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.frames.length;
    }, this.frameInterval);
  }

  stop() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.currentIndex = 0;
  }

  ngOnDestroy() {
    this.stop();
  }
}
