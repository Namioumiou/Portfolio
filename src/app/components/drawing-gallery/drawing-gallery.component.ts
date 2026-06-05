import { Component, HostListener } from '@angular/core';

export interface Drawing {
  src: string;
  title: string;
}

@Component({
  selector: 'app-drawing-gallery',
  standalone: true,
  templateUrl: './drawing-gallery.component.html',
})
export class DrawingGalleryComponent {
  // Remplace les valeurs par tes vrais contenus
  drawings: Drawing[] = [
    { src: 'dessins/BlueCat.png', title: 'Dessin 1' },
    { src: 'dessins/PurpleCat.png', title: 'Dessin 2' },
    { src: 'dessins/cat2.png', title: 'Dessin 3' },
    { src: 'dessins/adopt1.png', title: 'Dessin 4' },
    { src: 'dessins/fan-art-vtuber1.png', title: 'Dessin 5' },
    { src: 'dessins/pokemon1.0.png', title: 'Dessin 6' },
    { src: 'dessins/fleur.png', title: 'Dessin 4' },
    { src: 'dessins/rabbit.png', title: 'Dessin 5' },
    { src: 'dessins/dndfairyv2.1.png', title: 'Dessin 6' },
  ];

  activeIndex: number | null = null;

  get active(): Drawing | null {
    return this.activeIndex !== null ? this.drawings[this.activeIndex] : null;
  }

  open(index: number) {
    this.activeIndex = index;
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.activeIndex = null;
    document.body.style.overflow = '';
  }

  prev() {
    if (this.activeIndex === null) return;
    this.activeIndex = (this.activeIndex - 1 + this.drawings.length) % this.drawings.length;
  }

  next() {
    if (this.activeIndex === null) return;
    this.activeIndex = (this.activeIndex + 1) % this.drawings.length;
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (this.activeIndex === null) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }
}
