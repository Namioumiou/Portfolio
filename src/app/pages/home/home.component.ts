import { Component } from '@angular/core';
import { DrawingGalleryComponent } from '../../components/drawing-gallery/drawing-gallery.component';
import { LogoGalleryComponent } from '../../components/logo-gallery/logo-gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DrawingGalleryComponent, LogoGalleryComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
