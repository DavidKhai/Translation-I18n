import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: `./${environment.clientName}-layout.component.html`,
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
