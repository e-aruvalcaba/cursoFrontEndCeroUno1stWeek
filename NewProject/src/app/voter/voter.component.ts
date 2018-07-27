import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

 @Input() name:string;
 @Output() voted = new EventEmitter <boolean>();
 didvote = false;

 vote(agreed: boolean){
   this.voted.emit(agreed);
   this.didvote=true;
 }


  constructor() { }

  ngOnInit() {
  }

}
