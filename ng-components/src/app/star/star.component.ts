import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
  clicked = false
  fillColor = 'transparent'

  toggleStar() {
    if (this.clicked) {
      this.fillColor = 'transparent'
    } else {
      this.fillColor = "#f5e169"
    }
    this.clicked = !this.clicked
  }
}
