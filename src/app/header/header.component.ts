import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navClicked = new EventEmitter<string>();

  // Emit an event called navClicked which will pass the nav items id
  onClick(navItem: HTMLElement) {
    this.navClicked.emit(navItem.id);
  }
}
