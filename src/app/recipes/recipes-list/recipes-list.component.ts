import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes-model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This simply a test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe','This simply a test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe','This simply a test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')

];

   constructor() { }

  ngOnInit() {
  }

}
