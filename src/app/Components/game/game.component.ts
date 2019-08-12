import { Component, OnInit } from '@angular/core';

//Let op: werkt (nog) niet!

///#region Method which is defined in the JS file.
declare function runJS();
declare function game();
//#endregion



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {

    runJS();  //JS file call

   
  }
  
  

  
}
