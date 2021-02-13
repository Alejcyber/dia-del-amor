import { Component } from "@angular/core";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-heart-cascade",
  templateUrl: "./heart-cascade.component.html",
  styleUrls: ["./heart-cascade.component.scss"]
})
export class HeartCascadeComponent {
  faHeart = faHeart;
}
