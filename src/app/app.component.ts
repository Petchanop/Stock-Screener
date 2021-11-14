import { Component } from '@angular/core';
import { Tile } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stock Screener';
  tiles: Tile[]=  [
    {cols: 1,color: 'lightblue'},
    {cols: 3,color: 'lightgreen'},
  ];
}
