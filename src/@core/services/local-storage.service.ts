import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ConfigService } from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private _code: string = '';
  private _storageObj: any = {};
  onUpdated$ = new Subject();
  allReady: boolean = false;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.loadStorage();
  }

  get(name: any): any | null {
    try {
      return this._storageObj[name];
    } catch (error) {
      return null;
    }
  }

  set(name: any, value: any): boolean {
    this._storageObj[name] = value;
    this.storeNewData();
    this.invokeUpdate();
    return true;
  }

  storeNewData(): void {
    let data = this._storageObj;
    let storeData = JSON.stringify(data);
    localStorage.setItem(this._code, storeData);
  }

  loadStorage(): void {
    try {
      let storeData = localStorage.getItem(this._code);
      if (storeData) {
        const data = JSON.parse(storeData);
        this._storageObj = data || {};
      }
    } catch (error) {
      // this._toastr.error(error, { title: 'Failed to load saved data' });
    }
  }

  invokeUpdate(loaded: boolean = false): void {
    let storeData = this._storageObj;
    this.onUpdated$.next({ storeData, loaded });
    this.allReady = loaded || this.allReady;
  }

  clearLocalStorage(): void {
    Object.keys(this._storageObj).forEach(
      key => {
        return this._storageObj[key] = null;
      }
    );
    localStorage.clear();
  }
}
