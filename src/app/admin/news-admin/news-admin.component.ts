import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { NewsAdminService} from '../common/services/news-admin.service';

@Component({
  selector: 'app-news-admin',
  templateUrl: './news-admin.component.html',
  styleUrls: ['./news-admin.component.css']
})
export class NewsAdminComponent implements AfterViewInit {

  displayedColumns = ['id', 'newsTitle', 'publishDate', 'status', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private newsAdminService: NewsAdminService) {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) {
      users.push(createNewUser(i));
    }

    // console.log(users);
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);

    this.dataSource = new MatTableDataSource();

    this.newsAdminService.readAllNews()
      .map(res => {
        res.forEach( (item, i) => {
        //  item.id = i + 1;
         item['id'] = i + 1;
        });
        return res;
      })
      .subscribe(res => {
        console.log(res);
        this.dataSource.data = res;
      });
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    // console.log(this.paginator);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    newsTitle: name,
    status: Math.round(Math.random() * 100).toString(),
    publishDate: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}


/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  newsTitle: string;
  status: string;
  publishDate: string;
}
