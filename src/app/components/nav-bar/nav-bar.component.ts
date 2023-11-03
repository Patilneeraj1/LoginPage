import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css']
})
export class NavBarComponent {
  isLoginPage = false; // Initializing the property
  dailog: any;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url != '/login-page';
      }
    });

  }

}
