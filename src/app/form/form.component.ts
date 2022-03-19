import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  searchText: string = '';
  @Output('search') search = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  searchEvent() {
    this.search.emit(this.searchText);
  }
}
