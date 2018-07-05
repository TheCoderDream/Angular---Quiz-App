import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {appRoutes} from "./routes";

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}
