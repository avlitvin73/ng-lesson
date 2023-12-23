import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private _authors: string[]

  constructor() { 
    this._authors = [
      'author1',
      'author2',
      'author3'
    ]
  }

  get authors() {
    return this._authors
  }
}
