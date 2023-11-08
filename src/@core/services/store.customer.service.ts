import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { LocalStorageService } from ".";

@Injectable({
  providedIn: 'root'
})
export class StoreCustomerService {
  private currentCustomer$: BehaviorSubject<any> = new BehaviorSubject(null);
  private authorized$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private emptyCart$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private spinner: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(
    private readonly storageService: LocalStorageService
  ) {
    this.load()
  }

  private load() {
    const authorization = this.storageService.get('authorization');
    if (authorization && authorization.customer) {
      this.authorized$.next(true);
      this.currentCustomer$.next(authorization.customer);
    }
  }

  get emptyCart(): Observable<any> {
    return this.emptyCart$.asObservable();
  }

  set setCartStatus(empty: boolean) {
    this.emptyCart$.next(empty);
  }

  get customer(): Observable<any> {
    return this.currentCustomer$.asObservable();
  }

  get isAuthorized(): Observable<boolean> {
    return this.authorized$.asObservable()
  }

  get currentCustomer(): any {
    return this.currentCustomer$.value;
  }

  setCustomer(customer: any) {
    const authorization: any = this.storageService.get('authorization');
    authorization.customer = customer;
    this.currentCustomer$.next(customer);
    this.authorized$.next(true);
    return this.storageService.set('authorization', authorization);
  }

  logout(): boolean {
    const info = this.storageService.get('bookingInformation');
    this.storageService.set('authorization', null);
    this.currentCustomer$.next(null);
    this.authorized$.next(false);
    return this.storageService.set('bookingInformation', info);
  }

  get getSpinner(): Observable<string[]> {
    return this.spinner.asObservable();
  }

  addSpinner(url: string) {
    const spinner: string[] = this.spinner.getValue();
    spinner.push(url);
    return this.spinner.next(spinner);
  }

  removeSpinner(index: number) {
    let spinner: string[] = this.spinner.getValue();
    spinner = spinner.filter((e: string, i: number) => i !== index)
    return this.spinner.next(spinner);
  }

  removeAllSpinner() {
    return this.spinner.next([]);
  }

  clear(){
    this.currentCustomer$.next(null);
  }
}
