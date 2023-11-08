import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { ERRORS } from "../@share/utils";
import { AppService, LocalStorageService, StoreCustomerService } from "../services";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class URLInterceptor implements HttpInterceptor {
  private wCredentials: boolean = true;

  constructor(
    private _toast: ToastrService,
    private readonly appService: AppService,
    private _localStorageService: LocalStorageService,
    private readonly store: StoreCustomerService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clientConfig = this.appService.clientConfig;
    if (req.url.includes('assets')) {

    } else {
      if (!req.url.includes('http')) {
        req = req.clone({
          url: `${clientConfig?.config?.base_url}${req.url}`,
          withCredentials: this.wCredentials,
        });
      }
    }
    return next.handle(req).pipe(
      finalize(() => {
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          if (typeof error.error.errors == "string") {
            this._toast.error(error.error.errors);
          } else this._toast.error(error.error.errors[0]);
        }
        if (error.status === 401) {
          this.store.logout();
        }
        this._localStorageService.set(ERRORS, error.error.errors);
        return throwError(error);
      })
    ) as Observable<HttpEvent<any>>;
  }
}
