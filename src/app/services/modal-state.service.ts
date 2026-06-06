import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalStateService {
  readonly isOpen = signal(false);
}
