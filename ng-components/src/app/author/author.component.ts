import { Component, Input } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  @Input() author = '';
}
