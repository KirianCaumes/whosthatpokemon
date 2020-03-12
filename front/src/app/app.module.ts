import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SettingsModalComponent } from './component/settings-modal/settings-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeLoaderComponent } from './component/poke-loader/poke-loader.component';


@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        SettingsModalComponent,
        PokeLoaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
