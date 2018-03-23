import { Component } from '@angular/core';
import { Player } from './Player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  PlayerSelected: Player;
  onPlayerSelected(input){
    this.PlayerSelected = input;
  }
}
