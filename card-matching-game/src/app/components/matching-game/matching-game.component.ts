import { Component, Input, OnInit } from '@angular/core';
import { Pair } from 'src/app/models/pair';

@Component({
  selector: 'app-matching-game',
  templateUrl: './matching-game.component.html',
  styleUrls: ['./matching-game.component.css']
})
export class MatchingGameComponent implements OnInit {
  @Input() pairs!: Pair[];
  private unsolvedPairs: Pair[] = [];
  private solvedPairs: Pair[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setUnsolvedPairs();
  }

  setUnsolvedPairs() {
    this.pairs.forEach(item => {
      this.unsolvedPairs.push(item);
    });
    console.log(this.unsolvedPairs);
  }

}
