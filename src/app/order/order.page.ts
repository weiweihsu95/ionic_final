import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  data: any;

  constructor() { }

  ngOnInit() {
    fetch('https://fakestoreapi.com/products/1')
      .then(res=>res.json())
      .then(json=>console.log(json))

    fetch('./assets/data/datajson.json')
      .then(res => res.json())
      .then(json => {this.data = json;});
  }
}
