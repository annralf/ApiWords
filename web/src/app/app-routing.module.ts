import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { PageComponent  } from './page/page.component';


const routes: Routes = [
  { path: 'word-srv', component: GameComponent },
  { path: 'page-test', component: PageComponent },
  { path: '', redirectTo: '/page-test', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
