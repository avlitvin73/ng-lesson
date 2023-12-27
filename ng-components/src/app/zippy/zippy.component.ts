import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  standalone: true,
  imports: [NgIf],
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css'
})
export class ZippyComponent {
  @Input() title = ''
  zippy = false

  handleClick() {
    this.zippy = !this.zippy
  }
  
}
