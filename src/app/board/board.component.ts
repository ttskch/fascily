import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Topic } from '../../models/topic';
import { Comment } from '../../models/comment';

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

  constructor() {}

  ngOnInit(): void {
    this.topics = [
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
    ]

    this.dataSource = new MatTableDataSource(this.topics);
    this.dataSource.sort = this.sort;

    this.selectedTopic = this.topics[0];
  }
}
