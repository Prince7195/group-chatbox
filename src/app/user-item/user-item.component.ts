import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserItemComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
