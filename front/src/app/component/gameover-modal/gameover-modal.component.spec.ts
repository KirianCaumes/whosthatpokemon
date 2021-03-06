import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameoverModalComponent } from './gameover-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('GameoverModalComponent', () => {
  let component: GameoverModalComponent;
  let fixture: ComponentFixture<GameoverModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        GameoverModalComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameoverModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
