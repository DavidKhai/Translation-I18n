import { Component, OnInit } from '@angular/core';
import { MAT_SELECT_CONFIG } from '@angular/material/select';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, pluck } from 'rxjs';
import { LocalStorageService } from 'src/@core';
import { Language } from 'src/@core/models/language';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    {
      provide: MAT_SELECT_CONFIG,
      useValue: { overlayPanelClass: 'custom-select-language' }
    }
  ]
})
export class HeaderComponent implements OnInit{
  languages: Language[] = [];
  languageDefault: string = 'en';
  isActiveHome: boolean = false;
  isActivePosts: boolean = false;
  isActiveAboutUs: boolean = false;
  isActiveContact: boolean = false;
  isActiveMore: boolean = false;
  isUser: boolean = false;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private storageService: LocalStorageService
  ) {
    this.checkUrl();
  }

  checkUrl() {
    this.router.events.pipe(filter((e) => e instanceof NavigationStart)).subscribe((url: any) => {
      this.activeTab(url?.url?.slice(1));
    })
  }

  ngOnInit() {
    this.activeTab(window.location.pathname.slice(1));
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
        'code': 'cy',
        'name': 'Wales'
      }
    ];
    this.languageDefault = this.storageService.get('languageDefault');
    this.checkoutAuth();
  }

  checkoutAuth() {
    if(this.storageService.get('isUser')) {
      this.isUser = true;
    }
  }

  activeTab(target: string) {
    switch (target) {
      case 'home':
        this.isActiveHome = true;
        this.isActivePosts = false;
        this.isActiveAboutUs = false;
        this.isActiveContact= false;
        this.isActiveMore = false;
        break;
      case 'posts':
        this.isActiveHome = false;
        this.isActivePosts = true;
        this.isActiveAboutUs = false;
        this.isActiveContact= false;
        this.isActiveMore = false;
        break;
      case 'about-us':
        this.isActiveHome = false;
        this.isActivePosts = false;
        this.isActiveAboutUs = true;
        this.isActiveContact= false;
        this.isActiveMore = false;
        break;
      case 'contact':
        this.isActiveHome = false;
        this.isActivePosts = false;
        this.isActiveAboutUs = false;
        this.isActiveContact= true;
        this.isActiveMore = false;
        break;
      case 'more':
        this.isActiveHome = false;
        this.isActivePosts = false;
        this.isActiveAboutUs = false;
        this.isActiveContact= false;
        this.isActiveMore = true;
        break;
      default:
        break;
    }
  }

  changeLanguage({value}: any) {
    this.storageService.set('languageDefault', value);
    this.translate.use(value);
  }

  navigateTab(target: string) {
    switch (target) {
      case 'home':
        this.router.navigate([`/home`]);
        break;
      case 'posts':
        this.router.navigate([`/posts`]);
        break;
      case 'about-us':
        this.router.navigate([`/about-us`]);
        break;
      case 'contact':
        this.router.navigate([`/contact`]);
        break;
      case 'more':
        this.router.navigate([`/more`]);
        break;
      default:
        break;
    }
  }

  login() {
    this.isUser = true;
    this.storageService.set('isUser', this.isUser);
  }

  logout() {
    this.isUser = false;
    this.storageService.set('isUser', this.isUser);
  }
}
