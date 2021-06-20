import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/intro', icon: 'home' },
    { title: 'About', url: '/folder/Outbox', icon: 'link' },
    { title: 'Product', url: '/products', icon: 'basket' },
    { title: 'Order', url: '/order', icon: 'cart' },
    { title: 'Reviews', url: '/reviews', icon: 'archive' },
    { title: 'Member-Center', url: '/tab1', icon: 'log-out' },
    { title: 'Log-In', url: '/login', icon: 'log-in' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
