import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../../../_services/user.service";
import {UserModel} from "../../../../../_models/user.model";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user_id!: string;
  @Input() realm!: string;
  userData!: UserModel;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getOne(this.realm, this.user_id).subscribe(data => {
      this.userData = data;
    });
  }

  updateUserInfo() {
    this.userService.update(this.realm, this.user_id, this.userData).subscribe(data => {
      this.userData = data;
    });
  }
}
