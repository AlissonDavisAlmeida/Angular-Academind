import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertComponent } from "./alert/alert.component";
import { LoadingSpinnersComponent } from "./loading-spinners/loading-spinners.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { DropdownDirective } from "./dropdown.directive";

@NgModule({
  declarations: [

    AlertComponent,
    LoadingSpinnersComponent,
    PlaceholderDirective,

    DropdownDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [

  ],
})
export class SharedModule { }
