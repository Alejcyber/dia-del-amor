import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SnowComponent } from "./snow.component";

@NgModule({
  declarations: [SnowComponent],
  exports: [SnowComponent]
})
export class SnowModule {}
