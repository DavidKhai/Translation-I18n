import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONFIG } from '../../assets/setup';

@Injectable()
export class SetupService {
  private setup: any = null;
  constructor() {
    this.loadSetupFile();
  }

  private loadSetupFile(): Observable<any> {
    this.setup = CONFIG;
    return of(CONFIG);
  }

  public getSetup() {
    if (this.setup) return of(this.setup);
    return this.loadSetupFile();
  }
}
