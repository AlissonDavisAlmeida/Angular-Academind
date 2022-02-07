import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertComponent } from "./alert/alert.component";

import { DropdownDirective } from "./dropdown.directive";

@NgModule({
  declarations: [

    AlertComponent,

    DropdownDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [

  ],
})
export class SharedModule { }
