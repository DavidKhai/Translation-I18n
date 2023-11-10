import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.router';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { MoreComponent } from './more/more.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactComponent,
    MoreComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSelectModule,
    TranslateModule
  ]
})
export class LayoutModule { }
