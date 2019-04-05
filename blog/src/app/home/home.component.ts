import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public items$: any;

  constructor(private service: DataService) {}

  ngOnInit() {
  }

}
