import { Component, OnInit } from '@angular/core';
import { faSync, faEye, faCheck, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
    faSync = faSync;
    faEye = faEye;
    faCheck = faCheck;
    faAngleUp = faAngleUp;

    //Generations
    gens = {
        one: true,
        two: true,
        three: true,
        four: true,
        five: true,
        six: true,
        seven: true
    }

    //Lang
    lang = "fr"

    //Input value
    inputPokemon = ""

    constructor() { }

    ngOnInit() {
    }

    //Handle chnage for pokemon input
    changeInputPokemon(ev) {
        console.log(this.gens)
    }

    //Handle change generation selected
    changeGen(gen, ev) {
        this.gens[gen] = ev.target.checked
    }

    //Check if value is okay
    check() {

    }

    //Refresh pokemon
    refresh() {

    }

    //Show response
    response() {

    }
}
