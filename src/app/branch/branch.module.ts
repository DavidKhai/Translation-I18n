import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchRoutingModule } from './branch.router';
import { BranchComponent } from './branch.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    BranchComponent
  ],
  imports: [
    CommonModule,
    BranchRoutingModule,
    TranslateModule
  ]
})
export class BranchModule { }
