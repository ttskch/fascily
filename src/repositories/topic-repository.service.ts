import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

import { Topic } from '../models/topic';
import { Comment } from '../models/comment';
import { CommentRepositoryService } from './comment-repository.service';

@Injectable({
  providedIn: 'root'
})
export class TopicRepositoryService {

  constructor(
    private firestore: AngularFirestore,
    private commentRepository: CommentRepositoryService,
  ) {}

  get(id: string): Observable<Topic> {
    return this.firestore.doc<Topic>(`topics/${id}`).valueChanges().pipe(
      map((topic: Topic) => {
        return {
          topic: topic,
          commentIds: topic.comments.map((comment: any) => comment.path.replace(/^comments\//, '')),
        };
      }),
      switchMap(({topic, commentIds}) => {
        return zip(...commentIds.map(commentId => this.commentRepository.get(commentId))).pipe(
          map((comments: Comment[]) => {
            return Object.assign(topic, {comments: comments});
          }),
        );
      }),
    );
  }
}
