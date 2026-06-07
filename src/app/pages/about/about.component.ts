import { Component, HostListener, inject } from '@angular/core';
import { ModalStateService } from '../../services/modal-state.service';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  private modalState = inject(ModalStateService);
  lang = inject(LangService);

  isOpen = false;

  open() {
    this.isOpen = true;
    this.modalState.isOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.isOpen = false;
    this.modalState.isOpen.set(false);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (this.isOpen && e.key === 'Escape') this.close();
  }
}
