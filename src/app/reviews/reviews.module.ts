import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ReviewsPageRoutingModule } from './reviews-routing.module';

import { ReviewsPage } from './reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewsPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReviewsPage
      }
    ])
  ],
  declarations: [ReviewsPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ReviewsPageModule {}
