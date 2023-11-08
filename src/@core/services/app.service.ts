import { Injectable } from "@angular/core";;
import { Client, Config } from "../models/config";
import { ConfigService } from "./config.service";
import { SetupService } from "./setup.service";

declare const conf: any;

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private config: any;

  constructor(
    private readonly setupService: SetupService,
    private readonly configService: ConfigService
  ) {
  }

  async bootstrap() {
    this.getAppConfig().subscribe(res => {
      res && (this.config = res);
    });;
  }

  async getConfig(): Promise<any> {
    if (conf) {
      return conf;
    }
    return new Promise(res => {
      document.addEventListener('onConfigLoaded', event => {
        res(event);
      });
    });
  }

  getSettings() {
  }

  setup(config: any) {

  }

  get clientConfig(): any {
    if (this.config) {
      let config = this.config.clients[this.configService.getConfig().code];
      return config;
    }
  }

  get appConfig(): any {
    if (this.config) {
      return this.config;
    }
  }

  private getAppConfig() {
    return this.setupService.getSetup();
  }
}
