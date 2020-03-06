import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    //Generations
    gens = { one: true, two: true, three: true, four: true, five: true, six: true, seven: false }

    //Lang
    lang = "fr"

    constructor() { }

    getSettings() {
        return {
            gens: this.gens,
            lang: this.lang
        }
    }

    editLang(newLang) {
        this.lang = newLang
    }

    editGens(newGens) {
        this.gens = newGens
    }
}
