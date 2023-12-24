import { Component } from '@angular/core';
import { AuthorsService, author } from '../authors.service';
import { NgFor } from '@angular/common';
import { AuthorComponent } from '../author/author.component';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [NgFor, AuthorComponent],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  authors: author[]

  constructor(authorService: AuthorsService) {
    this.authors = authorService.authors
  }

}
