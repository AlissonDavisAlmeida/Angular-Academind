import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['header.component.css'],
  templateUrl: 'header.component.html',
})

export class HeaderComponent {
  @Output() tagExibida = new EventEmitter<string>();

  tagReceitas() {
    console.log('A função rodou ');
    this.tagExibida.emit('Receitas');
  }

  tagShopping() {
    this.tagExibida.emit('Shopping');
  }
}
