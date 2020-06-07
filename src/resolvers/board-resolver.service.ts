import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { BoardRepositoryService } from '../repositories/board-repository.service';
import { Board } from '../models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardResolverService implements Resolve<Board> {

  constructor(
    private repository: BoardRepositoryService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Board> {

    // todo: somehow first() is needed. maybe angular/firestore bug?
    // @see https://stackoverflow.com/questions/51903105/resolver-not-resolving-with-angular-firestore
    return this.repository.get(route.params.boardId).pipe(first());
  }
}
