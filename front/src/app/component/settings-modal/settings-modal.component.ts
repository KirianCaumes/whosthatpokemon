import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SettingsService } from 'src/app/service/settings/settings.service';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-settings-modal',
    templateUrl: './settings-modal.component.html',
    styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit {
    @Input() isOpen: Boolean;
    @Output() onDismiss = new EventEmitter<boolean>();

    faSave = faSave
    faTimes = faTimes

    //Generations
    gens : any = {}

    //Lang
    lang = ""

    constructor(private settingsService: SettingsService) {
        this.gens =  {...this.settingsService.getSettings().gens}
        this.lang = this.settingsService.getSettings().lang
    }

    ngOnInit() {
    }


    //Handle change generation selected
    changeGen(gen, ev) {
        this.gens[gen] = ev.target.checked
    }

    //Handle change lang
    changeLang(ev) {
        this.lang = ev.target.value
    }

    //Dismiss modal
    dismiss() {
        this.onDismiss.emit()
    }

    //Persist settings on save
    save() {
        this.settingsService.editGens(this.gens)
        this.settingsService.editLang(this.lang)
        this.dismiss()
    }

}
