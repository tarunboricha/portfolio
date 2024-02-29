import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  isActive: boolean = false;

  toggleMenu() {
    this.isActive = true;
  }

  closeFullScreenNav() {
    this.isActive = false;
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.triggerNameAnimation();
      }
    });
  }

  triggerNameAnimation() {
    const headerMyName = document.querySelector('.header-myname h1');
    if (headerMyName) {
      headerMyName.classList.remove('text-tracking-in-expand');
      setTimeout(() => {
        headerMyName.classList.add('text-tracking-in-expand');
      }, 1); // Adding a small delay to ensure the class removal is applied before re-adding it
    }
  }
}
