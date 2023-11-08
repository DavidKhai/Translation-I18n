import { HttpParams } from "@angular/common/http";

export type Params = { params?: HttpParams } | {};
export type ParamWithSpinnerFn = (disableSpinner: boolean) => Params;
export type EscapeRegExpFn = (str: string) => string;
export type ReplaceAllFn = (source: string, target: string, replace: string) => string;
export type RequestQueryFn = (queries: object) => string;
export type GetLocalePrefixLangFn = () => string;
