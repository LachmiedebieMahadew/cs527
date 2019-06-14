import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-users',
  template: `<h2>User List</h2>

  <ul>
    <li *ngFor="let user of userArray">
      <a [routerLink] = "['detail',user.login.uuid]">{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</a>
    </li>
  </ul>`,
})
export class UsersComponent implements OnInit {

  private userArray;
  constructor(private users: DataService) {
    this.userArray = this.users.getCachedData();
  }

  ngOnInit() {
  }

}
