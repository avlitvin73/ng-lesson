import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { TextComponent } from './text/text.component';
import { ZippyComponent } from './zippy/zippy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    AuthorsComponent, 
    TextComponent,
    ZippyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
}
