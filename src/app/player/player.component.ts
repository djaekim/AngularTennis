import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../Player.model';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() onSelect: Player;
  constructor() { }

  ngOnInit() {
  }

}
