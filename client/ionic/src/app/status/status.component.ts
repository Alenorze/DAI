import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent implements OnInit {
    results = [{
            "uri": "http://127.0.0.1:8000/api/status/10/",
            "id": 10,
            "user": {
                "id": 1,
                "username": "Alenorze",
                "uri": "http://127.0.0.1:8000/api/user/Alenorze/"
            },
            "content": "please delete me"
        },
        {
            "uri": "http://127.0.0.1:8000/api/status/11/",
            "id": 11,
            "user": {
                "id": 1,
                "username": "Alenorze",
                "uri": "http://127.0.0.1:8000/api/user/Alenorze/"
            },
            "content": "Some great new content!",
            "image": null
        }]
  constructor() { }

  ngOnInit() {
  }

}
