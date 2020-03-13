import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faSave, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gameover-modal',
  templateUrl: './gameover-modal.component.html',
  styleUrls: ['./gameover-modal.component.scss']
})
export class GameoverModalComponent implements OnInit {
  @Input() isOpen: Boolean;
  @Input() score: number;
  @Output() onDismiss = new EventEmitter<boolean>();


  faSave = faSave
  faTimes = faTimes
  faUser = faUser

  username = ""

  constructor() { }

  //Dismiss modal
  dismiss() {
    this.onDismiss.emit()
  }

  changeUserName(ev) {
    this.username = ev.target.value
  }

  save() {
    //TODO connect api to save higshcore
    this.onDismiss.emit()
  }

  ngOnInit() {
  }

}
