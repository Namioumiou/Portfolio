import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  pillLeft = 0;
  pillWidth = 0;
  pillColor = '#CA2E55';
  pillVisible = false;

  onHover(event: MouseEvent, color: string) {
    const target = event.currentTarget as HTMLElement;
    const nav = target.closest('nav') as HTMLElement;
    const navRect = nav.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    this.pillLeft = targetRect.left - navRect.left;
    this.pillWidth = targetRect.width;
    this.pillColor = color;
    this.pillVisible = true;
  }

  onLeave() {
    this.pillVisible = false;
  }
}
