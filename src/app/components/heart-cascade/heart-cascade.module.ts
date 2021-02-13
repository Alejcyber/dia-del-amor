import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeartCascadeComponent } from "./heart-cascade.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeartCascadeComponent],
  exports: [HeartCascadeComponent],
  imports: [FontAwesomeModule]
})
export class HeartCascadeModule {}
