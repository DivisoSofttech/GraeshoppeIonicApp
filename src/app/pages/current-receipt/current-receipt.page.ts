import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-receipt',
  templateUrl: './current-receipt.page.html',
  styleUrls: ['./current-receipt.page.scss'],
})
export class CurrentReceiptPage implements OnInit {

  orders = [

    {name:"Burger Meal Chicken Burger 7" , price:"5.95"},
    {name:"Burger Meal Chicken Burger" , price:"5.95"},
    {name:"Burger Meal Chicken Burger" , price:"5.95"}

  ];
  
  constructor() { }

  ngOnInit() {
  }

}
