import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

import { Board } from '../models/board';
import { Topic } from '../models/topic';
import { TopicRepositoryService } from './topic-repository.service';

@Injectable({
  providedIn: 'root'
})
export class BoardRepositoryService {

  constructor(
    private firestore: AngularFirestore,
    private topicRepository: TopicRepositoryService,
  ) {}

  get(id: string): Observable<Board> {
    return this.firestore.doc<Board>(`boards/${id}`).valueChanges().pipe(
      map((board: Board) => {
        return {
          board: board,
          topicIds: board.topics.map((topic: any) => topic.path.replace(/^topics\//, '')),
        };
      }),
      switchMap(({board, topicIds}) => {
        return zip(...topicIds.map(topicId => this.topicRepository.get(topicId))).pipe(
          map((topics: Topic[]) => {
            return Object.assign(board, {topics: topics}) as Board;
          }),
        );
      }),
    );
  }
}
