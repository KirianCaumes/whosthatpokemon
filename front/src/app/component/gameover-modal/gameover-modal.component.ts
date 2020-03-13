import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faSave, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import {ApiServiceService} from "../../service/api-service/api-service.service";
import {SettingsService} from "../../service/settings/settings.service";

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

  constructor(private apiServiceService: ApiServiceService, private settingsService: SettingsService) { }

  //Dismiss modal
  dismiss() {
    this.onDismiss.emit()
  }

  changeUserName(ev) {
    this.username = ev.target.value
  }

  save() {
    this.apiServiceService.postScore({
      score: this.score,
      date:  (new Date()).toLocaleDateString(),
      name: this.username,
      gens: this.settingsService.getSettings().gens,
    }).subscribe();
    this.onDismiss.emit();
  }

  ngOnInit() {
  }

}
