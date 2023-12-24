import { Component, Input } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { author } from '../authors.service';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  @Input() author: author | null = null;
}
