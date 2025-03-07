import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: CharactersListComponent },
    { path: 'character/:id', component: CharacterDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}