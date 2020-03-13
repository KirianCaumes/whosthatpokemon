import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { faSync, faEye, faCheck, faAngleUp, faCog, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { SimilarityService } from '../service/similarity/similarity.service'
import { SettingsService } from '../service/settings/settings.service';
import { ApiServiceService } from '../service/api-service/api-service.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
    @ViewChild('pkmnNameInput', { static: true }) pkmnNameInput: ElementRef;

    faSync = faSync;
    faEye = faEye;
    faCheck = faCheck;
    faAngleUp = faAngleUp;
    faCog = faCog;
    faPlay = faPlay;
    faStop = faStop;

    message = {
        found: "Trouvé !",
        close: "Si proche !",
        quiteClose: "Assez proche",
        notClose: "Si loin...",
        empty: "Vous devez entrer quelque chose !"
    }

    //About api data
    apiSub: Subscription
    isLoading: Boolean = false
    pokemon = { "id_pokemon": 25, "name": { "fr": "Pikachu", "en": null, "de": null, "ja": null, "ko": null, "ru": null, "zh-hans": null, "zh-hant": null }, "generation": 1, "is_enable": true }//Pokemon infos

    pkmnNameInputValue = ""//Input value

    isAnswerDisplayed: Boolean = false
    isModalOpen: Boolean = false

    //Message displayed by score
    messageDisplayed = ""

    //About play fame
    isGameOn: Boolean = false
    timeLeft: number = 60
    score: number = 0
    scoreComparaison: number = 0
    isModalGameOverOpen: Boolean = false
    timer

    constructor(private similarityService: SimilarityService, private settingsService: SettingsService, private apiServiceService: ApiServiceService) { }

    ngOnInit() {
        this.refresh()
    }

    ngOnDestroy() {
        clearInterval(this.timer)
        this.apiSub.unsubscribe()
    }

    //Handle chnage for pokemon input
    changePkmnNameInputValue(ev) {
        this.pkmnNameInputValue = ev.target.value
    }

    //Check if value is okay
    check() {
        this.scoreComparaison = this.similarityService.getScore(this.pokemon.name[this.settingsService.getSettings().lang], this.pkmnNameInputValue)

        if (this.scoreComparaison < 3) {
            this.messageDisplayed = this.message.found
            this.isAnswerDisplayed = true
            if (this.isGameOn) {
                setTimeout(() => this.refresh(), 1000)
                this.score++
            }
        } else if (this.scoreComparaison < 5) {
            this.messageDisplayed = this.message.close
        } else if (this.scoreComparaison < 7) {
            this.messageDisplayed = this.message.quiteClose
        } else {
            this.messageDisplayed = this.message.notClose
        }
    }

    //Refresh pokemon
    refresh() {
        this.pokemon = { "id_pokemon": null, "name": { "fr": null, "en": null, "de": null, "ja": null, "ko": null, "ru": null, "zh-hans": null, "zh-hant": null }, "generation": 1, "is_enable": true }
        this.isAnswerDisplayed = false
        this.messageDisplayed = ""
        this.pkmnNameInputValue = ""
        this.isLoading = true
        this.apiSub = this.apiServiceService.getOneRandomPkm().subscribe(pokemon => {
            if (pokemon) this.pokemon = pokemon
            this.isLoading = false
            setTimeout(() => this.pkmnNameInput.nativeElement.focus(), 1)
        });
    }

    //Show response
    response() {
        this.isAnswerDisplayed = true
        this.messageDisplayed = ""
    }

    openModal() {
        this.isModalOpen = !this.isModalOpen
    }

    openModalGameOver() {
        this.isModalGameOverOpen = !this.isModalGameOverOpen
    }

    play() {
        this.isGameOn = true
        this.timeLeft = 60
        this.score = 0
        this.apiSub.unsubscribe()
        this.refresh()
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            if (!this.isLoading) { //Pokemon is load
                this.timeLeft--
                setTimeout(() => this.pkmnNameInput.nativeElement.focus(), 1)
            }
            if (this.timeLeft === 0) { //Game is over
                this.stop()
            }
        }, 1000)
    }

    stop() {
        this.isGameOn = false
        this.isModalGameOverOpen = true
        this.response()
        this.pkmnNameInputValue = ""
        this.apiSub.unsubscribe()
        clearInterval(this.timer)
    }
}
