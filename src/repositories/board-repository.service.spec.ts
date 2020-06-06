import { TestBed } from '@angular/core/testing';

import { BoardRepositoryService } from './board-repository.service';

describe('BoardRepositoryService', () => {
  let service: BoardRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
