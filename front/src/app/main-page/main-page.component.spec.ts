import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('MainPageComponent', () => {
    let component: MainPageComponent;
    let fixture: ComponentFixture<MainPageComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FontAwesomeModule,
                FormsModule
            ],
            declarations: [
                MainPageComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should find pokemon', () => {
        const pkmnName = "Pikachu"
        const pkmnId = 25
        const lang = 'fr'

        component.pokemon.id_pokemon = pkmnId
        component.pokemon.translate[lang] = pkmnName

        const buttonCheck = fixture.debugElement.query(By.css('[data-test-id="check-button"]'))
        const inputPkmnName = fixture.debugElement.query(By.css('[data-test-id="input-pkmn-name"]'))
        const message = fixture.debugElement.query(By.css('[data-test-id="message-pkmn-name"]'))

        inputPkmnName.nativeElement.value = pkmnName

        buttonCheck.nativeElement.click()

        fixture.detectChanges()

        expect(message).toEqual(component.message.found)
    })

    //TODO
    //Put data in input "nom du pokémon"

    //Select random gen and check values

    //Select random lang and check value
});
