import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService, LocalStorageService } from 'src/@core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  delay: boolean = false;
  loadConfig: boolean = true;

  constructor(
    private readonly appService: AppService,
    private translate: TranslateService,
    private storageService: LocalStorageService
  ) {
    if(!this.storageService.get('languageDefault')) {
      this.storageService.set('languageDefault', 'en');
      translate.setDefaultLang('en');
    }
    else {
      translate.setDefaultLang(this.storageService.get('languageDefault'));
    }

  }

  ngOnInit(): void {
    this.appService.bootstrap().then(() => this.loadConfig = false).catch(err => console.log(err, 'Bootstrap failed'));
  }

  get loaded(): boolean {
    return !this.delay && !this.loadConfig;
  }
}
