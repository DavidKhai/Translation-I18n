import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import SpinnerController from "src/@core/controllers/spinner.controller";
import { StoreCustomerService } from "src/@core/services/store.customer.service";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class SpinnerIntercepter implements HttpInterceptor {
  constructor(
    private _spinner: SpinnerController,
    private readonly store: StoreCustomerService,
    private readonly toastr: ToastrService,
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let hasSpinner: boolean = false;
    if (req.params.has("spinner")) {
      hasSpinner = true;
      this._spinner.addSpinner(req.urlWithParams ? req.urlWithParams : "");
      req.params.delete('spinner');
    }
    return next.handle(req).pipe(
      finalize(() => {
        if (hasSpinner) {
          this._spinner.removeSpinner(req.url);
        }
        this._spinner.removeSpinner(req.url);
      }),
      catchError((error) => {
        if(error.status === 401){
          this.toastr.error(error?.error?.errors);
          this.store.logout();
        }
        return throwError(error);
      })
    ) as Observable<HttpEvent<any>>;
  }
}
