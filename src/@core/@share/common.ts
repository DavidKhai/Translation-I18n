import { PAGEAMOUNT_DEFAULT, PAGINATION_TYPE } from "./utils/datatable.config";

export interface ErrorResponse {
    error: {
        errors: string[];
        isEmpty: boolean;
    };
}

export class PaginationRequest {
    Page?: number = 0;
    Amount?: number = PAGEAMOUNT_DEFAULT;
    Sort?: string = '';
    SearchText?: string = '';
    PaginationType?: number = PAGINATION_TYPE.ALL;
}

export interface PaginationResponse<T> {
    page: number;
    data: T[];
    amount: number;
    totalPage: number;
    sort: string;
    searchText: string;
    totalCount: number;
}

export default {
  handleResponse: (res: any, target: any, total: any, state: any) => {
    target = [...res?.data];
    total = res?.totalCount;
    state = false;
  },
  observer: (func: any) => {
    next: (res: any) => func(res);
  }
}
