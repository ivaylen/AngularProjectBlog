import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';



import {FormsModule} from '@angular/forms';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar-header/navbar.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule, FormsModule,
    MaterialModule, RouterModule
  ],
  exports: [
    CommonModule,FormsModule,
    MaterialModule,
   NavbarComponent, RouterModule
  ],
  declarations: [NavbarComponent]
})
export class ShareModule { }
