import { Injectable } from "@angular/core";
import { StoreCustomerService } from "../services/store.customer.service";

@Injectable()
export default class SpinnerController {
    private isRunning: boolean = false;
    private removeList: string[] = [];
    private notFoundList: string[] = [];

    constructor(private _store: StoreCustomerService) { }

    public addSpinner(url: string) {
        this._store.addSpinner(url);
        this.startRemove();
    }

    public removeSpinner(url: string) {
        if (!url) {
            this.removeList.push('');
        } else {
            this.removeList.push(url);
        }

        return this.startRemove();
    }

    private startRemove() {
        if (this.isRunning) { return; }
        this.isRunning = true;
        return this.processRemove();
    }

    private processRemove() {
        if (!this.removeList.length) {
            this.isRunning = false;
            this.processNotFound();
            return;
        }
        this._store.getSpinner.subscribe(spinner => {
            const index: number = spinner.findIndex(e =>
                e === this.removeList[0]
                || e.indexOf(this.removeList[0]) > -1
                || this.removeList[0].indexOf(e) > -1
            );
            if (index > -1) {
                this._store.removeSpinner(index);
            } else {
                this.notFoundList.push(this.removeList[0]);
            }
            this.removeList = this.removeList.filter((e, i) => i);
            setTimeout(() => {
                this.processRemove();
            });
        }).unsubscribe();
    }

    private processNotFound() {
        this._store.getSpinner.subscribe(spinner => {
            const storeList: string = JSON.stringify(spinner);
            setTimeout(() => {
                if (storeList === JSON.stringify(spinner)) {
                    return this._store.removeAllSpinner();
                }
            }, 60000);
        }).unsubscribe();
    }
}
