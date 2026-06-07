import { Component, HostListener, inject } from '@angular/core';
import { ModalStateService } from '../../services/modal-state.service';

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
  private modalState = inject(ModalStateService);

  drawings: Drawing[] = [
    { src: 'dessins/BlueCat.webp', title: 'Fenêtre de chat bleu' },
    { src: 'dessins/PurpleCat.webp', title: 'Fenêtre de chat violet' },
    { src: 'dessins/cat2.webp', title: 'Chat dans la forêt' },
    { src: 'dessins/adopt1.webp', title: 'Design original' },
    { src: 'dessins/fan-art-vtuber1.webp', title: 'Fan Art d\'une VTubeuse' },
    { src: 'dessins/pokemon1.0.webp', title: 'Reproduction d\'une carte pokémon' },
    { src: 'dessins/fleur.webp', title: 'Fleur' },
    { src: 'dessins/rabbit.webp', title: 'Model VTuber de lapin' },
    { src: 'dessins/dndfairyv2.1.webp', title: 'Fée, personnage pour Dungeons et Dragons' },
    { src: 'dessins/emoteEwanGnar1.webp', title: 'Emote Twitch' },
    { src: 'dessins/emoteEwanGnar2.webp', title: 'Emote Twitch' },
  ];

  activeIndex: number | null = null;

  get active(): Drawing | null {
    return this.activeIndex !== null ? this.drawings[this.activeIndex] : null;
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
