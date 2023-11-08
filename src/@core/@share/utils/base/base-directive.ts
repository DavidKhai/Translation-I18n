import { Directive, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Directive()
export class BaseDirective implements OnDestroy {
  private _destroy$: any;

  get destroy$(): Subject<any>{
    if(!this._destroy$){
      this._destroy$ = new Subject();
    }
    return this._destroy$;
  }


  ngOnDestroy(){
    if(this._destroy$){
      this._destroy$.next(true);
      this._destroy$.complete();
    }
  }
}
