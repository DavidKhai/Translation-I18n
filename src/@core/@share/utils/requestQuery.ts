import { HttpParams } from "@angular/common/http";
import { Params, ParamWithSpinnerFn } from "./shared/types";

export const requestQuery = (queries: object): string => {
  if (!queries) { return ''; }
  let result: any = JSON.parse(JSON.stringify(queries));
  result = Object.keys(result).map((key) => {
    return checkAvailable(result[key]) ? `${key}=${encodeURIComponent(result[key])}` : '';
  }).filter(x => x);
  return Object.values(result).join('&').replace(/#/, '%23');
};

export const requestQueryLog = (queries: object): string => {
if (!queries) { return ''; }
const result: any = JSON.parse(JSON.stringify(queries));
Object.keys(result).map((key) => {
  if (!checkAvailable(result[key])) {
    delete result[key];
  }
});
return JSON.stringify(result);
};

const checkAvailable = (value: any): boolean => {
return value !== null && value !== undefined && value !== '';
};

export const clearQueryParams = (url: string): string => {
return url.split('?')[0];
};

export const addQueryUrl = (url: string, query: string): string => {
const paths = url.split('?');
return `${paths[0]}?${paths[1] ? `${paths[1]}&` : ''}${query}`;
};

export const getParamsWithSpinner: ParamWithSpinnerFn = (disableSpinner: boolean = false): Params => {
  return disableSpinner ? {} : { params: new HttpParams().set("spinner", "1") };
}

export function trimValueObject<T>(obj: T | any) {
  if(obj && Object.keys(obj).length > 0 && obj.constructor === Object){
      return Object.keys(obj).reduce((result: any, key) => (result[key] = typeof obj[key] === 'string'? obj[key].trim() : obj[key], result), {} as T)
  }
  return obj;
}
