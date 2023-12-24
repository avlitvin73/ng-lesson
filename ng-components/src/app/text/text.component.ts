import { Component, NgModule } from '@angular/core';
import { CustomTitlePipe } from '../custom-title.pipe';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CustomTitlePipe],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  text = ''

  setText($event: any) {
    this.text = $event.target.value
  }
}
