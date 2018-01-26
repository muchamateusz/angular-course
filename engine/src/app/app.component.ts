import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  odd = [1, 3, 5, 7, 9];
  even = [2, 4, 5, 8];
  onlyOdd = false;
  value = 20;

}
