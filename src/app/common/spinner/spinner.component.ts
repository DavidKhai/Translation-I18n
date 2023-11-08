import { Component, OnInit } from '@angular/core';
import { StoreCustomerService } from 'src/@core/services/store.customer.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  public spinner: string[] = [];
  public show: boolean = false;
  public hasSpinner: boolean = false;

  constructor(
    private _store: StoreCustomerService
  ) { }

  ngOnInit(): void {
    this._store.getSpinner.subscribe(spinner => {
      this.hasSpinner = spinner.length ? true : false;
      this.spinner = spinner;
      this.processSpinner();
    });
  }

  processSpinner() {
    if (this.spinner.length > 0) {
      const temp: string = JSON.stringify(this.spinner);
      setTimeout(() => {
        this.show = temp === JSON.stringify(this.spinner);
      }, 10);
    } else {
      this.show = false;
    }
  }
}
