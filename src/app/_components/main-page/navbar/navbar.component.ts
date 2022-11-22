import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../_services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUserFullName: string = "Unknown";

  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnChanges(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.authService.loadUserInfo();
    if (this.isLoggedIn) {
      this.currentUserFullName = this.authService.currentUserValue.firstName + " " + this.authService.currentUserValue.lastName
    }
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.authService.loadUserInfo();
    if (this.isLoggedIn) {
      this.currentUserFullName = this.authService.currentUserValue.firstName + " " + this.authService.currentUserValue.lastName
    }
  }

}
