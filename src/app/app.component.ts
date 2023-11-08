import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/@core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  delay: boolean = false;
  loadConfig: boolean = true;

  constructor(
    private readonly appService: AppService
  ) {

  }

  ngOnInit(): void {
    this.appService.bootstrap()
      .then(() => this.loadConfig = false)
      .catch(err => console.log(err, 'Bootstrap failed'));
  }

  get loaded(): boolean {
    return !this.delay && !this.loadConfig;
  }
}
