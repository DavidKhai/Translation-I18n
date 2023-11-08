import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { languageService } from "../apis";

interface ConfigOption {
  title?: string;
  duration?: number;
  panelClass?: string;
  horizontalPosition?: 'start' | 'center' | 'end' | 'left' | 'right';
  verticalPosition?: 'top' | 'bottom';
}

@Injectable()
export default class ToastController {
  private duration: number = 3000;
  private successCom: any;
  private warningCom: any;
  private dangerCom: any;
  private horizontalPosition: any = 'center';
  private verticalPosition: any = 'top';
  constructor(
    private _snack: MatSnackBar,
    private readonly languageService: languageService,
  ) { }

  addComponent(components) {
    this.successCom = components.success;
    this.warningCom = components.warning;
    this.dangerCom = components.danger;
  }

  success(message: string | string[], configOptions?: ConfigOption) {
    if (!this.successCom) { return; };
    const defaultTitle = configOptions?.title ?? 'Successfully!';
    if (!Array.isArray(message)) {
      this.languageService.translateByKeys(message, defaultTitle).subscribe(([mess, title]) => {
        const temp = this._snack.openFromTemplate(this.successCom, {
          duration: configOptions?.duration || this.duration,
          panelClass: configOptions?.panelClass || "success",
          data: {
            title: title,
            message: this.formatMes(mess as string),
            cb: () => {
              temp.dismiss();
            }
          },
          horizontalPosition: configOptions?.horizontalPosition || this.horizontalPosition,
          verticalPosition: configOptions?.verticalPosition || this.verticalPosition,
        });
      });
    }
  }

  warning(message: string | string[], configOptions?: ConfigOption) {
    if (!this.warningCom) { return; }
    const defaultTitle = configOptions?.title ?? 'Warning!';
    if (!Array.isArray(message)) {
      this.languageService.translateByKeys(message, defaultTitle).subscribe(([mess, title]) => {
        const temp = this._snack.openFromTemplate(this.warningCom, {
          duration: configOptions?.duration || this.duration,
          panelClass: configOptions?.panelClass || "warning",
          data: {
            title: title,
            message: this.formatMes(mess as string),
            cb: () => {
              temp.dismiss();
            }
          },
          horizontalPosition: configOptions?.horizontalPosition || this.horizontalPosition,
          verticalPosition: configOptions?.verticalPosition || this.verticalPosition,
        });
      });
    }
  }

  error(message: string | string[], configOptions?: ConfigOption) {
    if (!this.dangerCom) { return; };
    const defaultTitle = configOptions?.title;
    if (!Array.isArray(message)) {
      this.languageService.translateByKeys(message, defaultTitle).subscribe(([mess, title]) => {
        const temp = this._snack.openFromTemplate(this.dangerCom, {
          duration: configOptions?.duration || this.duration,
          panelClass: configOptions?.panelClass || "danger",
          data: {
            title: title,
            message: this.formatMes(mess as string),
            cb: () => {
              temp.dismiss();
            }
          },
          horizontalPosition: configOptions?.horizontalPosition || this.horizontalPosition,
          verticalPosition: configOptions?.verticalPosition || this.verticalPosition,
        });
      })
    }
  }

  private formatMes(message: string | string[]) {
    if (Array.isArray(message)) {
      return message;
    }
    return [message];
  }
}
