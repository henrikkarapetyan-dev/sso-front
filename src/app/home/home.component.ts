import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean = false;
  username: string = "";
  enabled: boolean = false;

  constructor(private authService: AuthenticationService) {
    this.authService.loadUserInfo();
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isLoggedIn;
    this.authService.currentUser.subscribe(value => {
      if (value) {
        this.username = value.username;
        this.enabled = value.enabled;
      }
    })

  }

}
