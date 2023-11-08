import { Injectable } from "@angular/core";

@Injectable()
export default class SpinnerController {
    private isRunning: boolean = false;
    private removeList: string[] = [];

    constructor() { }

    public addSpinner(url: string) {
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
    }
}
