import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { NgProgressModule } from 'ng2-progressbar';
import 'hammerjs';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PlayerComponent } from './player/player.component';
import { SearchComponent } from './search/search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { MenuComponent } from './menu/menu.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { ListSongComponent } from './list-song/list-song.component';
import { ListHotSongComponent } from './list-hot-song/list-hot-song.component';

import { MusicService } from './music.service';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    MusicDetailComponent,
    NotfoundComponent,
    PlayerComponent,
    SearchComponent,
    SearchFormComponent,
    MenuComponent,
    MenuMobileComponent,
    ListSongComponent,
    ListHotSongComponent
  ],
  imports: [
    MaterialModule,
    NgProgressModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', children: [
          {
            path: 'song', children:
            [
              {
                path: ':id', component: MusicDetailComponent
              },
              {
                  path: '', component: MusicComponent
              }
            ]
          },
          { path: '', component: MusicComponent },
        ]
      },
      {
        path: 'search', children: [
          { path: ':value', component: SearchComponent },
          { path: '', component: NotfoundComponent },

        ]
      },
      { path: '**', component: NotfoundComponent },
    ]
      , { useHash: true }
    )

  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
