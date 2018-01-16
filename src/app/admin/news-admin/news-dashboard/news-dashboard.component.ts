import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { NewsAdminService} from '../../common/services/news-admin.service';
import { AlertPromise } from 'selenium-webdriver';

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.css']
})
export class NewsDashboardComponent implements AfterViewInit {

  displayedColumns = ['id', 'newsTitle', 'publishDate', 'status', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private newsAdminService: NewsAdminService) {
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


  publishNews() {
    if ( confirm('Do you want to publish this news')) {
      console.log('confirmed');
    }
    

  }
}

