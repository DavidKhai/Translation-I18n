import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { URLInterceptor } from "./common/http-interceptor";
import { ShareModule } from "./@share/modules/modules.module";
import SpinnerController from "./controllers/spinner.controller";
import { SetupService } from "./services";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ShareModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  declarations: [],
  exports:[
    ShareModule,
    TranslateModule
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: URLInterceptor, multi: true },
        SpinnerController,
        SetupService,
      ]
    }
  }
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
