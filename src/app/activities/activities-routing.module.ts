import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ActivitiesPage } from "./activities.page";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: "",
    component: ActivitiesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), TranslateModule],
  exports: [RouterModule],
})
export class ActivitiesPageRoutingModule {}
