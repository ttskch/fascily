import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

  topics: object[] = []

  tableColumns = ['id', 'body', 'done']
  dataSource: MatTableDataSource<any>|null = null

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.topics = [
      {id: 1, body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo', done: false, comments: [
          {id: 1, user: 'Alice', body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem', postedAt: new Date()},
          {id: 2, user: 'Bob', body: 'Li Europan lingues es membres del sam familie. Lor separat', postedAt: new Date()},
          {id: 3, user: 'Alice', body: 'Far far away, behind the word mountains, far from the', postedAt: new Date()},
        ]},
      {id: 2, body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo', done: false, comments: [
          {id: 4, user: 'Alice', body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem', postedAt: new Date()},
          {id: 5, user: 'Bob', body: 'Li Europan lingues es membres del sam familie. Lor separat', postedAt: new Date()},
          {id: 6, user: 'Alice', body: 'Far far away, behind the word mountains, far from the', postedAt: new Date()},
        ]},
      {id: 3, body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo', done: false, comments: [
          {id: 7, user: 'Alice', body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem', postedAt: new Date()},
          {id: 8, user: 'Bob', body: 'Li Europan lingues es membres del sam familie. Lor separat', postedAt: new Date()},
          {id: 9, user: 'Alice', body: 'Far far away, behind the word mountains, far from the', postedAt: new Date()},
        ]},
    ]

    this.dataSource = new MatTableDataSource(this.topics)
    this.dataSource.sort = this.sort;
  }
}
