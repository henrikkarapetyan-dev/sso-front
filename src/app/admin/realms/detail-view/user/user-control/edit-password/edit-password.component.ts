import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../../../../_services/user.service";
import {UserPasswordModel} from "../../../../../../_models/user-password.model";

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss']
})
export class EditPasswordComponent implements OnInit {
  @Input() user_id!: string;
  @Input() realm!: string;
  userData!: UserPasswordModel;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.passwordInfo(this.realm, this.user_id).subscribe(data => {
      this.userData = data;
    });
  }

  updateUserInfo() {
    this.userService.updatePassword(this.realm, this.user_id, this.userData).subscribe(data => {
      this.userData = data;
    });
  }
}
