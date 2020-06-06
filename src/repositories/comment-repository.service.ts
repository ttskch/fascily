import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentRepositoryService {

  constructor(
    private firestore: AngularFirestore,
  ) {}

  get(id: string): Observable<Comment> {
    return this.firestore.doc<Comment>(`comments/${id}`).valueChanges();
  }
}
