import { Component, OnInit } from '@angular/core';

import { Status } from './status';
import { StatusAPIService } from './status.service';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent implements OnInit {
    results: Status[] = [];
  constructor(private statusAPI: StatusAPIService) { }

  ngOnInit() {
      this.statusAPI.list().subscribe(data => {
        this.results = data.results;
      });
    }

}
