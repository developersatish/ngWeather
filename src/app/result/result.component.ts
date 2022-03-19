import { Component, Input, OnInit } from '@angular/core';
import { City } from '../city.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input('city') city: City = {
    des: '',
    name: '',
    feelLike: 0,
    temp: 0,
    windSpeed: ''
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
