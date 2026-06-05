import { Component, HostListener } from '@angular/core';

export interface Logo {
  src: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

@Component({
  selector: 'app-logo-gallery',
  standalone: true,
  templateUrl: './logo-gallery.component.html',
})
export class LogoGalleryComponent {
  // Remplace les valeurs par tes vrais contenus
  logos: Logo[] = [
    {
      src: 'logos/Befriendlogo.png',
      title: 'Logo 1',
      description: 'Décris ici le contexte de ce logo, le client, les choix graphiques...',
      tags: ['Branding', 'Illustrator'],
      link: '',
    },
    {
      src: 'logos/V1.png',
      title: 'Logo 2',
      description: 'Décris ici le contexte de ce logo, le client, les choix graphiques...',
      tags: ['Identité visuelle', 'Figma'],
    },
  ];

  activeIndex: number | null = null;

  get active(): Logo | null {
    return this.activeIndex !== null ? this.logos[this.activeIndex] : null;
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
    this.activeIndex = (this.activeIndex - 1 + this.logos.length) % this.logos.length;
  }

  next() {
    if (this.activeIndex === null) return;
    this.activeIndex = (this.activeIndex + 1) % this.logos.length;
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (this.activeIndex === null) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }
}
