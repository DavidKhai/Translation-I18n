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
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';


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
    ReactiveFormsModule,
    LayoutRoutingModule,
    MatSelectModule,
    TranslateModule,
    MatDialogModule,
    FormsModule,
    AuthModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
  ],
})
export class LayoutModule { }
