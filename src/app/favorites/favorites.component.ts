import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  @Input() favoriteProducts: Product[];
  constructor() { }

  ngOnInit() {
  }

}
