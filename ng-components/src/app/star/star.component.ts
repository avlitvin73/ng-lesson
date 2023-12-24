import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
  @Input() isLiked = false
  @Input() likesCount = 0
  fillColor = 'transparent'

  toggleStar() {
    if (this.isLiked) {
      this.fillColor = 'transparent'
      this.likesCount -= 1
    } else {
      this.fillColor = "#f5e169"
      this.likesCount += 1
    }
    this.isLiked = !this.isLiked
  }
}
