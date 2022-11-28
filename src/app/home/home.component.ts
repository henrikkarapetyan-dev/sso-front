import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  selector: 'app-admin-client-main-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: string = "";
  enabled: boolean = false;

  constructor(public authService: AuthenticationService) {}


  ngOnInit(): void {
    this.authService.loadUserInfo();
    this.authService.currentUser.subscribe(value => {
        this.username = value.username;
        this.enabled = value.enabled;
    })

  }

}
