import { Component } from '@angular/core';
import { MarvelService } from '../../core/marvel.service';
import { response } from 'express';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent {
  characters: any[] = [];
  currentPage = 0;

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.marvelService.getCharacters(this.currentPage * 10).subscribe((response: any) => {
      this.characters = response.data.results;
    });
  }

  nextPage() {
    this.currentPage++;
    this.loadCharacters();
  }

  previousPage() {
    if(this.currentPage > 0) {
      this.currentPage--;
      this.loadCharacters();
    }
  }

}
