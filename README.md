# angular-matrials

#npm install --save @angular/material @angular/cdk @angular/animations
> @import “~@angular/material/prebuilt-themes/indigo-pink.css”;
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatRadioModule,
  MatBadgeModule,
  MatPaginatorModule
} from '@angular/material';

const YOUR_MATERIAL_MODULES = [
  MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatRadioModule,
  MatBadgeModule,
  MatPaginatorModule
  
];
@NgModule({
  imports: [
    CommonModule,
    YOUR_MATERIAL_MODULES
  ],
  exports: [YOUR_MATERIAL_MODULES],
  declarations: []
})
export class AngularMaterialModule { }
