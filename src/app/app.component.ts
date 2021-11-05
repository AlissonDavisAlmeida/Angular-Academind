import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  tagExibida : string;

  exibirReceita(event) {
    console.log('A tag mudou');
    this.tagExibida = event;
  }
}
