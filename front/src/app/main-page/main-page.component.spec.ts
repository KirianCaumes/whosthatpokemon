import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SettingsService } from '../service/settings/settings.service';
import { SettingsModalComponent } from '../component/settings-modal/settings-modal.component';
import { PokeLoaderComponent } from '../component/poke-loader/poke-loader.component';
import { HttpClientModule } from '@angular/common/http';

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
                PokeLoaderComponent
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

        console.log(textName.nativeElement.innerHTML)

        expect(textName.nativeElement.innerHTML).toBe(component.pokemon.name[settingsService.getSettings().lang])
    })

});
