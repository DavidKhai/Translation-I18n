import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'src/@core';
import { Language } from 'src/@core/models/language';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  languages: Language[] = [];
  languageDefault: string = 'en';

  constructor(
    private router: Router,
    private translate: TranslateService,
    private storageService: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.languages = [
      {
        'id': 1,
        'code': 'en',
        'name': 'English'
      },
      {
        'id': 2,
        'code': 'de',
        'name': 'Germany'
      },
      {
        'id': 3,
        'code': 'vi',
        'name': 'Vietnamese'
      },
      {
        'id': 4,
        'code': 'thai',
        'name': 'ThaiLan'
      },
      {
        'id': 5,
        'code': 'cy',
        'name': 'Wales'
      }
    ];
    this.languageDefault = this.storageService.get('languageDefault');
  }

  changeLanguage({value}: any) {
    this.storageService.set('languageDefault', value);
    this.translate.use(value);
  }

  nextBranch(){
    this.router.navigate(['/branch']);
  }
}
