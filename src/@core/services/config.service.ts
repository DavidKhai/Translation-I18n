import { Inject, Injectable, Optional } from "@angular/core";

export const CONFIG_TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(
    @Optional() @Inject(CONFIG_TOKEN) private conf: any
  ) { }

  getConfig(): any {
    return this.conf;
  }
}
