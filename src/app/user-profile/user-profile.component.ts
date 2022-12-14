import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../_services/authentication.service";
import {UserModel} from "../_models/user.model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public userModel!:UserModel;
  constructor(public authService:AuthenticationService ) { }

  ngOnInit(): void {
    this.userModel = this.authService.currentUserValue
    console.log(this.userModel.userFullName)
  }

}
