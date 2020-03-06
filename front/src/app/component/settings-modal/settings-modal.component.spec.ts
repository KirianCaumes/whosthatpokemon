import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsModalComponent } from './settings-modal.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SettingsModalComponent', () => {
    let component: SettingsModalComponent;
    let fixture: ComponentFixture<SettingsModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FontAwesomeModule,
                FormsModule
            ],
            declarations: [
                SettingsModalComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
