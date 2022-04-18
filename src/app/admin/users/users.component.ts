import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../_models/user.model";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../_services/user.service";
import {GlobalStateService} from "../../_services/global-state.service";
import {MainPageUserService} from "../../_services/main-page-user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public model_data!: UserModel[];
  constructor(public userService: MainPageUserService) {
  }

  ngOnInit(): void {
  }

  setModelData($event: any[]) {
    this.model_data = $event
  }

  onSort($event: any) {

  }

  openUserPage(uuid: any) {

  }
}
