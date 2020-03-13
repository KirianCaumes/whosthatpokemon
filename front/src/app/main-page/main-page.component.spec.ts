import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SettingsService } from '../service/settings/settings.service';
import { SettingsModalComponent } from '../component/settings-modal/settings-modal.component';
import { PokeLoaderComponent } from '../component/poke-loader/poke-loader.component';
import { HttpClientModule } from '@angular/common/http';
import { GameoverModalComponent } from '../component/gameover-modal/gameover-modal.component';

describe('MainPageComponent', () => {
    let component: MainPageComponent;
    let fixture: ComponentFixture<MainPageComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FontAwesomeModule,
                FormsModule,
                HttpClientModule
            ],
            declarations: [
                MainPageComponent,
                SettingsModalComponent,
                PokeLoaderComponent,
                GameoverModalComponent
            ],
            providers: [
                SettingsService
            ]
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

        const settingsService: SettingsService = new SettingsService()

        component.pokemon.id_pokemon = pkmnId
        component.pokemon.name[lang] = pkmnName
        component.isLoading = false

        settingsService.editLang(lang)
        
        fixture.detectChanges()

        const buttonCheck = fixture.debugElement.query(By.css('[data-test-id="check-button"]'))
        const inputPkmnName = fixture.debugElement.query(By.css('[data-test-id="input-pkmn-name"]'))
        const message = fixture.debugElement.query(By.css('[data-test-id="message-pkmn-name"]'))

        inputPkmnName.nativeElement.value = pkmnName

        fixture.detectChanges()

        inputPkmnName.nativeElement.dispatchEvent(new Event('change'))

        fixture.detectChanges()

        buttonCheck.nativeElement.click()

        fixture.detectChanges()

        expect(message.nativeNode.innerHTML.trim()).toEqual(component.message.found)
    })
    
    it('should get pokemon from api', async () => {
        await new Promise(resolve => setTimeout(resolve, 1500))

        fixture.detectChanges()

        const image = fixture.debugElement.query(By.css('[data-test-id="image-pkmn"]'))

        fixture.detectChanges()

        expect(image.nativeElement.src).not.toBe(null)
    })

    //Test show answer
    
    it('should get pokemon from api and answer displayed', async () => {
        await new Promise(resolve => setTimeout(resolve, 1500))

        fixture.detectChanges()

        const buttonShow = fixture.debugElement.query(By.css('[data-test-id="answer-button"]'))
        const textName = fixture.debugElement.query(By.css('[data-test-id="answer-text"]'))

        fixture.detectChanges()

        buttonShow.nativeElement.click()

        fixture.detectChanges()
        const settingsService: SettingsService = TestBed.get(SettingsService);

        expect(textName.nativeElement.innerHTML).toBe(component.pokemon.name[settingsService.getSettings().lang])
    })

    // TEST score
    it('verify the message score', async () => {
        await new Promise(resolve => setTimeout(resolve, 1500))
       
        const pkmnName = "Pikachu"
        const pkmnId = 25
        const lang = 'fr'

        component.pokemon.id_pokemon = pkmnId
        component.pokemon.name[lang] = pkmnName
        component.isLoading = false
        component.isGameOn = true;

        fixture.detectChanges()

        let message = {
            found: "Trouvé !",
            close: "Si proche !",
            quiteClose: "Assez proche",
            notClose: "Si loin...",
            empty: "Vous devez entrer quelque chose !"
        }

        const buttonCheck = fixture.debugElement.query(By.css('[data-test-id="check-button"]'))

        for (let index = 1; index < 10; index++) {

            component.pkmnNameInputValue = component.pokemon.name[lang] + "A".repeat(index)

            buttonCheck.nativeElement.click()

            fixture.detectChanges()

            if (component.scoreComparaison < 3) {
                expect(component.messageDisplayed).toBe(message.found);
            } else if (component.scoreComparaison < 5) {
                expect(component.messageDisplayed).toBe(message.close);
            } else if (component.scoreComparaison < 7) {
                expect(component.messageDisplayed).toBe(message.quiteClose);
            } else {
                expect(component.messageDisplayed).toBe(message.notClose);
            }
        }
    })

    // TEST score
    it('verify the timer', async () => {
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        const buttonPlay = fixture.debugElement.query(By.css('[data-test-id="play-timer-button"]'))
        

        buttonPlay.nativeElement.click()

        fixture.detectChanges()

        expect(component.isGameOn).toBe(true);

        await new Promise(resolve => setTimeout(() => {

            const buttonStop = fixture.debugElement.query(By.css('[data-test-id="close-timer-button"]'))
            buttonStop.nativeElement.click()
            
            fixture.detectChanges()

            resolve(expect(component.isGameOn).toBe(false))
        }, 1500))
    })
});
