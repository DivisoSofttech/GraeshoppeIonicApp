import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-billoptions',
  templateUrl: './billoptions.component.html',
  styleUrls: ['./billoptions.component.scss'],
})
export class BilloptionsComponent implements OnInit {

  @Input()
  bills : number []=[];
  constructor() { }

  ngOnInit() {
    console.log('no of bills ',this.bills);
  }

}
