import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './game/game.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SocialMediaComponent,
    FooterComponent,
    GameComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCarouselModule.forRoot(),
    MatGridListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], {
      useHash: false,
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      enableTracing: true,
      scrollPositionRestoration: 'enabled'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
