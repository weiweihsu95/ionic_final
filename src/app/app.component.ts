import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/intro', icon: 'home' },
    { title: 'About', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Product', url: '/products', icon: 'heart' },
    { title: 'Reviews', url: '/reviews', icon: 'archive' },
    { title: 'Order', url: '/folder/Trash', icon: 'trash' },
    { title: 'Member-Center', url: '/tab1', icon: 'warning' },
    { title: 'Log-In', url: '/login', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
