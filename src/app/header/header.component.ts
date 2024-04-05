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
    document.body.classList.add('disable-scroll');
  }

  closeFullScreenNav() {
    this.isActive = false;
    document.body.classList.remove('disable-scroll');
  }
}
