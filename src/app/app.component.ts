import { Component } from '@angular/core';
import { faCloud, faHeart, faMountain, faTree } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dia-del-amor';
  faCloud = faCloud;
  faHeart = faHeart;
  faMountain = faMountain;
  faTree = faTree;
  showHearts = false;
  text = 'Tocame';

  changeState(){
    this.showHearts = !this.showHearts;
    if(this.showHearts){
      this.text = 'Te Amo';
    }else{
      this.text = 'Tocame';
    }

  }
}
