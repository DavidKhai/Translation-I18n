import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaginationResponse } from "src/@core/@share/common";
import { requestQuery } from "src/@core/@share/utils";
import { Branch, PaginationBranchRequest } from "./branch.DTO";

@Injectable({
  providedIn: 'root'
})
export class BranchService{
  api: string = '/api/BookingWebsite/Branches';
  paramsWithSpinner = { params: new HttpParams().set("spinner", "1") };

  constructor(
    private _http: HttpClient,
  ) { }

  getBranches(request: PaginationBranchRequest, disableSpinner: boolean = false): Observable<PaginationResponse<Branch>> {
    let params = disableSpinner ? {} : this.paramsWithSpinner;
    return this._http.get<PaginationResponse<Branch>>(`${this.api}?${requestQuery(request)}`, params);
  }
}
