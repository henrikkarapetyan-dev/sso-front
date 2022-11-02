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

  constructor(private authService: AuthenticationService) {}


  ngOnInit(): void {
    this.authService.loadUserInfo();
    this.isAuthenticated = this.authService.isLoggedIn;
    console.log("in home controller ", this.isAuthenticated)
    this.authService.currentUser.subscribe(value => {
        this.username = value.username;
        this.enabled = value.enabled;
    })

  }

}
