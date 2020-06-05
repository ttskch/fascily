import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Topic } from '../../modles/topic';
import { Comment } from '../../modles/comment';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  topics: Topic[] = []
  selectedTopic: Topic|null = null

  tableColumns = ['id', 'body', 'done']
  dataSource: MatTableDataSource<any>|null = null

  constructor() {}

  ngOnInit(): void {
    this.topics = [
      {id: 1, body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo', done: false, comments: [
          {id: 1, body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'} as Comment,
          {id: 2, body: 'Li Europan lingues es membres del sam familie. Lor separat'} as Comment,
          {id: 3, body: 'Far far away, behind the word mountains, far from the'} as Comment,
        ]} as Topic,
      {id: 2, body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo', done: true, comments: [
          {id: 4, body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'} as Comment,
          {id: 5, body: 'Li Europan lingues es membres del sam familie. Lor separat'} as Comment,
          {id: 6, body: 'Far far away, behind the word mountains, far from the'} as Comment,
        ]} as Topic,
      {id: 3, body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo', done: false, comments: [
          {id: 7, body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'} as Comment,
          {id: 8, body: 'Li Europan lingues es membres del sam familie. Lor separat'} as Comment,
          {id: 9, body: 'Far far away, behind the word mountains, far from the'} as Comment,
        ]} as Topic,
    ]

    this.dataSource = new MatTableDataSource(this.topics)
    this.dataSource.sort = this.sort

    this.selectedTopic = this.topics[0]
  }
}
