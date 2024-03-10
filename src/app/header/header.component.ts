import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  constructor() { }

  isActive: boolean = false;

  toggleMenu() {
    this.isActive = true;
  }

  closeFullScreenNav() {
    this.isActive = false;
  }
}
