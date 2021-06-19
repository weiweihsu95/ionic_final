import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoDetailsPageRoutingModule } from './todo-details-routing.module';

import { TodoDetailsPage } from './todo-details.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TodoDetailsPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoDetailsPageRoutingModule,
    RouterModule.forChild(routes)

  ],
  declarations: [TodoDetailsPage]
})
export class TodoDetailsPageModule {}
