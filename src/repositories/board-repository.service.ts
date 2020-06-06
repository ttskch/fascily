import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Board } from '../models/board';
import { Topic } from '../models/topic';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class BoardRepositoryService {

  constructor() {}

  get(id: string): Observable<Board> {
    const topics = [
      {body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo', done: false, comments: [
          {body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'} as Comment,
          {body: 'Li Europan lingues es membres del sam familie. Lor separat'} as Comment,
          {body: 'Far far away, behind the word mountains, far from the'} as Comment,
        ]} as Topic,
      {body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo', done: true, comments: [
          {body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'} as Comment,
          {body: 'Li Europan lingues es membres del sam familie. Lor separat'} as Comment,
          {body: 'Far far away, behind the word mountains, far from the'} as Comment,
        ]} as Topic,
      {body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo', done: false, comments: [
          {body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'} as Comment,
          {body: 'Li Europan lingues es membres del sam familie. Lor separat'} as Comment,
          {body: 'Far far away, behind the word mountains, far from the'} as Comment,
        ]} as Topic,
    ];

    return of({name: '', topics: topics} as Board);
  }
}
