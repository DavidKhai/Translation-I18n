import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { PaginationResponse } from "src/@core/@share/common";
import { requestQuery } from "src/@core/@share/utils";
import { Branch, PaginationBranchRequest } from "./branch.DTO";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class BranchService{
  api: string = '/api/BookingWebsite/TicketGroup';
  paramsWithSpinner = { params: new HttpParams().set("spinner", "1")};

  constructor(
    private _http: HttpClient,
    private toast: ToastrService
  ) { }

  getBranches(request: PaginationBranchRequest, disableSpinner: boolean = false): Observable<PaginationResponse<Branch>> {
    const params = disableSpinner ? {} : this.paramsWithSpinner;
    return this._http.get<PaginationResponse<Branch>>(`${this.api}?${requestQuery(request)}`, params).pipe(
      tap(() => {
        this.toast.success("Get data successfully", '', {
          positionClass: 'toast-bottom-right'
        });
      })
    );
  }
}
