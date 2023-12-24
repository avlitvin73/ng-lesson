import { Injectable } from '@angular/core';

export interface author {
  name: string,
  likesCount: number,
  isLiked: boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private _authors: author[]

  constructor() { 
    this._authors = [
      {
        name:'author1',
        likesCount: 19,
        isLiked: false
      },
      {
        name:'author2',
        likesCount: 9,
        isLiked: true
      },
      {
        name:'author3',
        likesCount: 3,
        isLiked: false
      },
    ]
  }

  get authors() {
    return this._authors
  }
}
