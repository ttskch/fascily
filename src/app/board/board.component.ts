import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { BoardRepositoryService } from '../../repositories/board-repository.service';
import { Topic } from '../../models/topic';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  topics: Topic[] = [];
  selectedTopic: Topic|null = null;

  tableColumns = ['body', 'done'];
  dataSource: MatTableDataSource<any>|null = null;

  constructor(
    private route: ActivatedRoute,
    private boardRepository: BoardRepositoryService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.boardRepository.get(params.boardId).subscribe(board => {
        this.topics = board.topics;
      });
    });

    this.dataSource = new MatTableDataSource(this.topics);
    this.dataSource.sort = this.sort;

    this.selectedTopic = this.topics[0];
  }
}
