import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSync, faEye, faCheck, faAngleUp, faCog } from '@fortawesome/free-solid-svg-icons';
import { SimilarityService } from '../service/similarity/similarity.service';
import { SettingsService } from '../service/settings/settings.service';
import { ApiServiceService } from '../service/api-service/api-service.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
    faSync = faSync;
    faEye = faEye;
    faCheck = faCheck;
    faAngleUp = faAngleUp;
    faCog = faCog;

    //Input value
    inputPokemon = ""

    //Pokemon infos
    pokemon = { "id_pokemon": null, "name": { "fr": null, "en": null, "de": null, "ja": null, "ko": null, "ru": null, "zh-hans": null, "zh-hant": null }, "generation": 1, "is_enable": true }

    isAnswerDisplayed: Boolean = false

    message = {
        found: "Trouvé !",
        close: "Si proche !",
        quiteClose: "Assez proche",
        notClose: "Si loin...",
        empty: "Vous devez entrer quelque chose !"
    }

    //Message displayed by score
    messageDisplayed = ""

    isModalOpen = false
    resApiPkm = {}

    constructor(private similarityService: SimilarityService, private settingsService: SettingsService, private apiServiceService: ApiServiceService) {

    }

    ngOnInit() {
        this.refresh()
    }

    ngOnDestroy() {

    }

    //Handle chnage for pokemon input
    changeInputPokemon(ev) {
        this.inputPokemon = ev.target.value
    }

    //Check if value is okay
    check() {
        let score = this.similarityService.getScore(this.pokemon.translate[this.settingsService.getSettings().lang], this.inputPokemon)

        if (score < 3) {
            this.messageDisplayed = this.message.found
            this.isAnswerDisplayed = true
        } else if (score < 5) {
            this.messageDisplayed = this.message.close
        } else if (score < 7) {
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
        this.inputPokemon = ""
        this.apiServiceService.getOneRandomPkm().subscribe(pokemon => this.pokemon = pokemon);
    }

    //Show response
    response() {
        this.isAnswerDisplayed = true
    }

    openModal() {
        this.isModalOpen = !this.isModalOpen
    }
}
