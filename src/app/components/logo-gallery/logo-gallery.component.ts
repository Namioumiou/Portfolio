import { Component, HostListener, inject } from '@angular/core';
import { ModalStateService } from '../../services/modal-state.service';
import { LangService } from '../../services/lang.service';

export interface LogoVersion {
  src: string;
  colors?: string[];
}

export interface Logo {
  src: string;
  title: string;
  description: string;
  colors: string[];
  otherVersions?: LogoVersion[];
  inspirations?: string[];
}

@Component({
  selector: 'app-logo-gallery',
  standalone: true,
  templateUrl: './logo-gallery.component.html',
  styleUrl: './logo-gallery.component.scss',
})
export class LogoGalleryComponent {
  private modalState = inject(ModalStateService);
  lang = inject(LangService);

  logos: Logo[] = [
    {
      src: 'logos/V1.webp',
      title: 'Esport Team',
      description: 'Option de logo créer pour une équipe d\'esport. Le client souhaitait un logo qui évoque l\'eau.',
      colors: ['#0055DA', '#3585FF', '#3E6DB6'],
      otherVersions: [{ src: 'logos/mb.webp', colors: ['#1D99DA', '#1DB6DC', '#1ED0DD'] }],
      inspirations: ['logos/inspi1.webp', 'logos/inspi2.webp', 'logos/inspi3.webp', 'logos/inspi4.webp'],
    },
    {
      src: 'logos/BefriendlogovV1.webp',
      title: 'BeFriend',
      description: 'Logo réalisé pour une application d\'activités.',
      colors: ['#A7C957', '#00B3CB'],
      otherVersions: [{ src: 'logos/bfv2.webp', colors: ['#226EE6'] }],
    },
  ];

  activeIndex: number | null = null;

  get active(): Logo | null {
    return this.activeIndex !== null ? this.logos[this.activeIndex] : null;
  }

  get activeDescription(): string {
    return this.activeIndex !== null ? this.lang.t().logos[this.activeIndex].description : '';
  }

  open(index: number) {
    this.activeIndex = index;
    this.modalState.isOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.activeIndex = null;
    this.modalState.isOpen.set(false);
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

  setVersion(version: LogoVersion) {
    if (this.activeIndex === null) return;
    const logo = this.logos[this.activeIndex];
    const prevVersion: LogoVersion = { src: logo.src, colors: logo.colors };
    logo.src = version.src;
    logo.colors = version.colors ?? [];
    logo.otherVersions = (logo.otherVersions ?? []).map(v => v === version ? prevVersion : v);
  }

  copyColor(color: string, event: MouseEvent) {
    navigator.clipboard.writeText(color);
    (event.currentTarget as HTMLElement).focus();
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (this.activeIndex === null) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }
}
