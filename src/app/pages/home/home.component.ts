import { Component, inject } from '@angular/core';
import { DrawingGalleryComponent } from '../../components/drawing-gallery/drawing-gallery.component';
import { LogoGalleryComponent } from '../../components/logo-gallery/logo-gallery.component';
import { GameCardsComponent } from '../../components/game-cards/game-cards.component';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DrawingGalleryComponent, LogoGalleryComponent, GameCardsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  lang = inject(LangService);
}
