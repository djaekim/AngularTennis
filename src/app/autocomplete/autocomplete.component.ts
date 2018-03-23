import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Player } from '../Player.model';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  inputVal = '';
  User = false;
  @Output() playerOut = new EventEmitter<Player>();
  players: Player[] = [
    new Player('Roger Federer', 'Basel, Switzerland', 36, '../../assets/image/fed.png'),
    new Player('Rafael Nadal', 'Spain', 31, '../../assets/image/nadal.png')
  ];
 filtered: string[];
  stopTyping(ele){
    if (ele.value.length === 0){
      console.log(ele.value.length);
      this.User = false;
    }
  }
  onType(ele){
    var output = [];
    if (ele.value.length === 0){
      this.User = false;
    } else {
      this.players.forEach(function(value){
        if (value.name.toLowerCase().indexOf(ele.value.toLowerCase()) >= 0){
         
          output.push(
           { name: value.name,
             country: value.country,
             age: value.age,
             path: value.imagePath
          }

          );
        }
        
      })
      this.filtered = output;
      this.User = true;
    }
    
  
    
  }
  onClick(input){
    this.User = false;
    this.playerOut.emit({name:input.name, country:input.country, age: input.age, imagePath:input.path});
  }
  constructor() { }

  ngOnInit() {
  }

}
