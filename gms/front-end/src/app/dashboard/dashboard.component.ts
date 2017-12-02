import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { GroupDescriptor, DataResult, process, State, aggregateBy } from '@progress/kendo-data-query';

import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

import { HttpService } from '../services/http.service';
import { UserData } from '../model/users';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {

  constructor(private httpService: HttpService, private router:Router, private snackBar:MatSnackBar) {}

  //data;
  private groups: GroupDescriptor[] = [{ field: "username" }];
  private aggregates: any[] = [{field: 'score', aggregate: 'sum'}];

  private state: State = {
        skip: 0,
        take: 5,
        group: [{ field: 'Username  ', aggregates: this.aggregates }]
  };

  data = [{
        "id": 1,
        "username": "Chai",
        "score": 1000,
        "level": "Easy"
    }, {
        "id": 1,
        "username": "Chai",
        "score": 1000,
        "level": "Easy"
    }]

  private dataSource: any = process(this.data, this.state);
  private total: any = aggregateBy(this.data, this.aggregates);

  protected dataStateChange(state: DataStateChangeEvent): void {
    if(state && state.group){
        state.group.map(group => group.aggregates = this.aggregates);
    }

    this.state = state;
    this.dataSource = process(this.data, this.state);
  }

  ngOnInit() {
  	this.getRecords();
  }

  page=1;
  getRecords(){
  	/*return this.httpService
      .getRecords('/api/dashboard?page='+this.page+'&limit=100')
      .subscribe(data =>{
        this.data = data['data']['docs'];
    },
        (err) => {
    });*/
  }

  exportToExcel(){
    location.href = 'http://localhost:3000/api/excel-xls';
  }
}