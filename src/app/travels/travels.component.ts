import { Component, OnInit } from '@angular/core';
import { travels } from '../travels';

@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.sass']
})
export class TravelsComponent implements OnInit {
  travels = travels;

  constructor() { }

  ngOnInit(): void {
  }

}
