import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { URLInterceptor } from "./common/http-interceptor";
import { ShareModule } from "./@share/modules/modules.module";
import SpinnerController from "./controllers/spinner.controller";
import { SetupService } from "./services";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ShareModule
  ],
  declarations: [],
  exports:[
    ShareModule
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
