import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plus-minus-ng';
  value = 0;

  minus() {
    this.value--;
  }

  plus() {
    this.value++;
  }

}