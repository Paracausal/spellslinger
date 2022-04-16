import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { spellslingerReducer } from './state/spellslinger.reducer';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ZoneComponent } from './components/match/zone/zone.component';
import { MatchComponent } from './components/match/match.component';
import { CardComponent } from './components/match/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoneComponent,
    MatchComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({spellslinger: spellslingerReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
