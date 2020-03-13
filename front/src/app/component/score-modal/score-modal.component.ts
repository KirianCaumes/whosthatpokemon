import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ScoreService } from 'src/app/service/score/score.service';
import { ApiServiceService } from 'src/app/service/api-service/api-service.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-score-modal',
  templateUrl: './score-modal.component.html',
  styleUrls: ['./score-modal.component.scss']
})
export class ScoreModalComponent implements OnInit {
  @Output() onDismiss = new EventEmitter<boolean>();

  faTimes = faTimes;
  users;

  constructor(private apiServiceService: ApiServiceService) { }

  ngOnInit() {
      this.apiServiceService.getTenScore().subscribe(user => {
        this.users = user;
    });
  }

  // Dismiss modal
  dismiss() {
    this.onDismiss.emit();
  }

}
